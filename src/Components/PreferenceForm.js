import React, { useState } from 'react';

const PreferenceForm = ({ onSubmit }) => {
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ type, duration, budget });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Activity Type:
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Indoor">Indoor</option>
                </select>
            </label>
            <label>
                Duration:
                <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                    <option value="">Select</option>
                    <option value="1 hour">1 hour</option>
                    <option value="2-3 hours">2-3 hours</option>
                    <option value="4+ hours">4+ hours</option>
                </select>
            </label>
            <label>
                Budget:
                <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </label>
            <button type="submit">Get Recommendations</button>
        </form>
    );
};

export default PreferenceForm;
