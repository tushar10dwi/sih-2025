
from pydantic import BaseModel
from typing import List, Optional, Dict, Any

class Answer(BaseModel):
    question_id: int
    selected_option: str
    time_taken: Optional[float] = None

class PsychometricTest(BaseModel):
    user_id: str
    test_type: str
    answers: List[Answer]
    demographic_info: Optional[Dict[str, Any]] = None

class College(BaseModel):
    name: str
    location: str
    ranking: Optional[int] = None
    website: Optional[str] = None

class Skill(BaseModel):
    name: str
    category: str
    importance: float  # 0-1 scale

class Career(BaseModel):
    id: int
    name: str
    category: str
    description: str
    required_skills: List[Skill]
    top_colleges: List[College]
    growth_prospects: float  # 0-1 scale
    average_salary: Optional[float] = None

class CareerRecommendation(BaseModel):
    career: Career
    match_score: float
    reasoning: List[str]

class CareerRecommendationResponse(BaseModel):
    user_id: str
    primary_recommendations: List[CareerRecommendation]
    secondary_recommendations: List[CareerRecommendation]
    aptitude_scores: Dict[str, float]
    personality_traits: Dict[str, float]
    interest_scores: Dict[str, float]
