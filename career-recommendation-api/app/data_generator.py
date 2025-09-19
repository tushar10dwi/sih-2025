
import pandas as pd
import numpy as np
from typing import List

def generate_sample_data(num_samples: int = 1000) -> pd.DataFrame:
    """Generate sample training data"""
    data = []
    
    for i in range(num_samples):
        # Generate random features
        aptitude = np.random.uniform(0, 1)
        extraversion = np.random.uniform(0, 1)
        agreeableness = np.random.uniform(0, 1)
        conscientiousness = np.random.uniform(0, 1)
        neuroticism = np.random.uniform(0, 1)
        openness = np.random.uniform(0, 1)
        realistic = np.random.uniform(0, 1)
        investigative = np.random.uniform(0, 1)
        artistic = np.random.uniform(0, 1)
        social = np.random.uniform(0, 1)
        enterprising = np.random.uniform(0, 1)
        conventional = np.random.uniform(0, 1)
        
        # Determine career cluster based on features (simplified rules)
        if aptitude > 0.7 and investigative > 0.6:
            cluster = 0  # Engineering & Technology
        elif investigative > 0.6 and social > 0.5:
            cluster = 1  # Medical & Life Sciences
        elif conventional > 0.6 and enterprising > 0.5:
            cluster = 2  # Commerce & Finance
        elif artistic > 0.6 and openness > 0.6:
            cluster = 3  # Arts, Design & Humanities
        elif enterprising > 0.7 and social > 0.6:
            cluster = 4  # Management & Entrepreneurship
        elif conscientiousness > 0.7 and realistic > 0.6:
            cluster = 5  # Civil Services & Defence
        else:
            cluster = np.random.randint(0, 6)
        
        data.append([
            aptitude, extraversion, agreeableness, conscientiousness,
            neuroticism, openness, realistic, investigative, artistic,
            social, enterprising, conventional, cluster
        ])
    
    columns = [
        'aptitude', 'extraversion', 'agreeableness', 'conscientiousness',
        'neuroticism', 'openness', 'realistic', 'investigative', 'artistic',
        'social', 'enterprising', 'conventional', 'career_cluster'
    ]
    
    return pd.DataFrame(data, columns=columns)
