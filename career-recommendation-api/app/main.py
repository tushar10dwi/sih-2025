
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any
import numpy as np
import pandas as pd
from . import schemas
from .ml_engine import CareerRecommendationEngine
from .data_generator import generate_sample_data

app = FastAPI(title="Career Recommendation API", 
              description="API for career recommendations based on psychometric tests",
              version="1.0.0")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the recommendation engine
engine = CareerRecommendationEngine()

@app.get("/")
async def root():
    return {"message": "Career Recommendation API"}

@app.post("/analyze-test/", response_model=schemas.CareerRecommendationResponse)
async def analyze_test_results(test_data: schemas.PsychometricTest):
    """
    Analyze psychometric test results and provide career recommendations
    """
    try:
        recommendations = engine.analyze_and_recommend(test_data)
        return recommendations
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/careers/", response_model=List[schemas.Career])
async def get_all_careers():
    """
    Get all available careers
    """
    return engine.get_all_careers()

@app.get("/careers/{career_id}", response_model=schemas.Career)
async def get_career_by_id(career_id: int):
    """
    Get a specific career by ID
    """
    career = engine.get_career_by_id(career_id)
    if not career:
        raise HTTPException(status_code=404, detail="Career not found")
    return career

@app.post("/generate-sample-data/")
async def generate_sample_test_data(num_samples: int = 100):
    """
    Generate sample test data for training (admin endpoint)
    """
    data = generate_sample_data(num_samples)
    engine.train_model(data)
    return {"message": f"Generated {num_samples} samples and trained model"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
