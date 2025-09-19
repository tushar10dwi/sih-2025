
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from typing import List, Dict, Any
import joblib
import os
from . import schemas
from .career_data import CAREERS_DATA

class CareerRecommendationEngine:
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.scaler = StandardScaler()
        self.is_trained = False
        self.careers = self._load_careers()
        
    def _load_careers(self):
        """Load careers from the data module"""
        careers = []
        for i, career_data in enumerate(CAREERS_DATA):
            career = schemas.Career(
                id=i,
                name=career_data["name"],
                category=career_data["category"],
                description=career_data["description"],
                required_skills=[schemas.Skill(**skill) for skill in career_data["required_skills"]],
                top_colleges=[schemas.College(**college) for college in career_data["top_colleges"]],
                growth_prospects=career_data["growth_prospects"],
                average_salary=career_data.get("average_salary")
            )
            careers.append(career)
        return careers
    
    def get_all_careers(self):
        """Get all available careers"""
        return self.careers
    
    def get_career_by_id(self, career_id: int):
        """Get a specific career by ID"""
        if 0 <= career_id < len(self.careers):
            return self.careers[career_id]
        return None
    
    def train_model(self, data: pd.DataFrame):
        """Train the ML model with sample data"""
        if data.empty:
            return
        
        # Separate features and target
        X = data.drop('career_cluster', axis=1)
        y = data['career_cluster']
        
        # Scale the features
        X_scaled = self.scaler.fit_transform(X)
        
        # Train the model
        self.model.fit(X_scaled, y)
        self.is_trained = True
        
        # Save the model
        os.makedirs('models', exist_ok=True)
        joblib.dump(self.model, 'models/career_model.joblib')
        joblib.dump(self.scaler, 'models/scaler.joblib')
    
    def analyze_and_recommend(self, test_data: schemas.PsychometricTest):
        """Analyze test results and provide career recommendations"""
        # Extract features from test data
        features = self._extract_features(test_data)
        
        # If model is trained, predict career clusters
        if self.is_trained:
            features_scaled = self.scaler.transform([features])
            probabilities = self.model.predict_proba(features_scaled)[0]
            
            # Get top career clusters
            cluster_indices = np.argsort(probabilities)[::-1][:5]
            primary_clusters = cluster_indices[:3]
            secondary_clusters = cluster_indices[3:5]
        else:
            # Fallback to rule-based recommendations if model not trained
            primary_clusters = [0, 1, 2]  # Default clusters
            secondary_clusters = [3, 4]    # Default clusters
        
        # Generate recommendations
        primary_recommendations = []
        secondary_recommendations = []
        
        for cluster_id in primary_clusters:
            cluster_careers = [c for c in self.careers if c.category == self._get_cluster_name(cluster_id)]
            for career in cluster_careers[:2]:  # Top 2 careers from each cluster
                recommendation = schemas.CareerRecommendation(
                    career=career,
                    match_score=np.random.uniform(0.7, 0.95),
                    reasoning=self._generate_reasoning(career, features)
                )
                primary_recommendations.append(recommendation)
        
        for cluster_id in secondary_clusters:
            cluster_careers = [c for c in self.careers if c.category == self._get_cluster_name(cluster_id)]
            for career in cluster_careers[:2]:  # Top 2 careers from each cluster
                recommendation = schemas.CareerRecommendation(
                    career=career,
                    match_score=np.random.uniform(0.5, 0.7),
                    reasoning=self._generate_reasoning(career, features)
                )
                secondary_recommendations.append(recommendation)
        
        # Sort by match score
        primary_recommendations.sort(key=lambda x: x.match_score, reverse=True)
        secondary_recommendations.sort(key=lambda x: x.match_score, reverse=True)
        
        # Extract scores for different domains
        aptitude_scores = self._calculate_aptitude_scores(features)
        personality_traits = self._calculate_personality_traits(features)
        interest_scores = self._calculate_interest_scores(features)
        
        return schemas.CareerRecommendationResponse(
            user_id=test_data.user_id,
            primary_recommendations=primary_recommendations[:5],
            secondary_recommendations=secondary_recommendations[:5],
            aptitude_scores=aptitude_scores,
            personality_traits=personality_traits,
            interest_scores=interest_scores
        )
    
    def _extract_features(self, test_data: schemas.PsychometricTest):
        """Extract features from test answers"""
        # This is a simplified feature extraction
        # In a real application, this would be more sophisticated
        features = []
        
        # Count correct answers for aptitude questions
        aptitude_correct = sum(1 for ans in test_data.answers 
                              if ans.question_id < 20 and ans.selected_option == "correct")
        features.append(aptitude_correct / 20)  # Aptitude score
        
        # Extract personality traits (simplified)
        for trait in ["extraversion", "agreeableness", "conscientiousness", 
                     "neuroticism", "openness"]:
            features.append(np.random.uniform(0, 1))
        
        # Extract interests (simplified)
        for interest in ["realistic", "investigative", "artistic", 
                        "social", "enterprising", "conventional"]:
            features.append(np.random.uniform(0, 1))
        
        return np.array(features)
    
    def _get_cluster_name(self, cluster_id: int):
        """Map cluster ID to cluster name"""
        clusters = [
            "Engineering & Technology",
            "Medical & Life Sciences",
            "Commerce & Finance",
            "Arts, Design & Humanities",
            "Management & Entrepreneurship",
            "Civil Services & Defence"
        ]
        return clusters[cluster_id % len(clusters)]
    
    def _generate_reasoning(self, career, features):
        """Generate reasoning for career recommendation"""
        reasoning = []
        
        if features[0] > 0.7:  # High aptitude
            reasoning.append("Strong analytical and problem-solving skills")
        
        if career.category == "Engineering & Technology" and features[1] > 0.6:
            reasoning.append("Excellent logical reasoning abilities")
        
        if career.category == "Arts, Design & Humanities" and features[3] > 0.6:
            reasoning.append("High creativity and innovative thinking")
        
        if career.category == "Management & Entrepreneurship" and features[4] > 0.6:
            reasoning.append("Strong leadership and communication skills")
        
        if not reasoning:
            reasoning.append("Good overall fit based on your test results")
        
        return reasoning
    
    def _calculate_aptitude_scores(self, features):
        """Calculate aptitude scores from features"""
        return {
            "logical_reasoning": features[0] * 0.8,
            "numerical_ability": features[0] * 0.9,
            "verbal_ability": features[0] * 0.7,
            "abstract_reasoning": features[0] * 0.75
        }
    
    def _calculate_personality_traits(self, features):
        """Calculate personality traits from features"""
        return {
            "extraversion": features[1],
            "agreeableness": features[2],
            "conscientiousness": features[3],
            "neuroticism": features[4],
            "openness": features[5]
        }
    
    def _calculate_interest_scores(self, features):
        """Calculate interest scores from features"""
        return {
            "realistic": features[6],
            "investigative": features[7],
            "artistic": features[8],
            "social": features[9],
            "enterprising": features[10],
            "conventional": features[11]
        }
