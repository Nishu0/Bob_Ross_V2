"use client"
import '../../styles/ai.css';
import React, { useState } from "react";
import Navbar from '../../components/Navbar';
const API_TOKEN = process.env.HUGGING_API_KEY

const ImageGenerationForm = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const input = event.target.elements.input.value;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      setLoading(false);
      setOutput(null);
      alert("Failed to generate image. Please try again later.");
      return;
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (<div className="container al-c mt-3">
    <Navbar />
    <h1>Stable <span>Diffusion</span></h1>
    <p>Create Beautiful Image with AI</p>
    <form className="gen-form" onSubmit={handleSubmit}>
      <input type="text" name="input" placeholder="type your prompt here..." />
      <button type="submit">Generate</button>
    </form>
    <div>
    {loading && <div className="loading">Loading...</div>}
    {!loading && output && (
      <div className="result-image">
        <img src={output} alt="art"  />
      </div>
    )}
    </div>

    </div>);
  
};

export default ImageGenerationForm;