import React, { useState, useEffect } from 'react';
import './LeetCodeStats.css';

const LeetCodeStats = ({ username = "Utkarsh_Raj32" }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);
        
        // Try multiple API endpoints for better reliability
        const apiEndpoints = [
          `https://leetcode-stats-api.herokuapp.com/${username}`,
          `https://alpha-leetcode-api.onrender.com/${username}/solved`,
          `https://alfa-leetcode-api.onrender.com/userProfile/${username}`
        ];

        let data = null;
        
        for (const endpoint of apiEndpoints) {
          try {
            const response = await fetch(endpoint);
            if (response.ok) {
              data = await response.json();
              break;
            }
          } catch (err) {
            console.log(`Failed to fetch from ${endpoint}:`, err);
          }
        }

        if (!data) {
          throw new Error('All API endpoints failed');
        }
        
        setStats(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching LeetCode stats:', err);
        
        // Fallback to your current stats if API fails
        setStats({
          totalSolved: 189,
          totalQuestions: 3640,
          easySolved: 55,
          totalEasy: 888,
          mediumSolved: 95,
          totalMedium: 1893,
          hardSolved: 39,
          totalHard: 859,
          acceptanceRate: "78.45%",
          ranking: 568385,
          contestRating: 1414
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, [username]);

  if (loading) {
    return (
      <div className="leetcode-stats-loading">
        <div className="loading-spinner"></div>
        <p>Loading LeetCode stats...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="leetcode-stats-error">
        <p>Error loading LeetCode stats: {error}</p>
        <p>Please check your username or try again later.</p>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  const calculatePercentage = (solved, total) => {
    return total > 0 ? Math.round((solved / total) * 100) : 0;
  };

  const totalSolved = stats.totalSolved || 0;
  const totalQuestions = stats.totalQuestions || 2500; // Approximate total

  return (
    <div className="leetcode-stats-container">
      <div className="leetcode-header">
        <div className="leetcode-profile">
          <h3>LeetCode Progress</h3>
          <p className="username">@{username}</p>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="leetcode-overview">
        <div className="stat-card total-solved">
          <h4>Total Solved</h4>
          <div className="solved-chart-container">
            <div className="circular-progress">
              <svg className="progress-ring" width="120" height="120">
                <circle
                  className="progress-ring-background"
                  stroke="#333"
                  strokeWidth="8"
                  fill="transparent"
                  r="52"
                  cx="60"
                  cy="60"
                />
                <circle
                  className="progress-ring-progress"
                  stroke="#4caf50"
                  strokeWidth="8"
                  fill="transparent"
                  r="52"
                  cx="60"
                  cy="60"
                  strokeDasharray={`${2 * Math.PI * 52}`}
                  strokeDashoffset={`${2 * Math.PI * 52 * (1 - calculatePercentage(totalSolved, totalQuestions) / 100)}`}
                />
              </svg>
              <div className="chart-center">
                <div className="stat-number">{totalSolved}</div>
                <div className="total-questions">/{totalQuestions}</div>
                <div className="percentage">{calculatePercentage(totalSolved, totalQuestions)}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="difficulty-breakdown">
        <div className="difficulty-card easy">
          <h4>Easy</h4>
          <div className="problem-count">
            {stats.easySolved || 0} / {stats.totalEasy || 800}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill easy-fill" 
              style={{ width: `${calculatePercentage(stats.easySolved, stats.totalEasy)}%` }}
            ></div>
          </div>
          <p>{calculatePercentage(stats.easySolved, stats.totalEasy)}%</p>
        </div>

        <div className="difficulty-card medium">
          <h4>Medium</h4>
          <div className="problem-count">
            {stats.mediumSolved || 0} / {stats.totalMedium || 1600}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill medium-fill" 
              style={{ width: `${calculatePercentage(stats.mediumSolved, stats.totalMedium)}%` }}
            ></div>
          </div>
          <p>{calculatePercentage(stats.mediumSolved, stats.totalMedium)}%</p>
        </div>

        <div className="difficulty-card hard">
          <h4>Hard</h4>
          <div className="problem-count">
            {stats.hardSolved || 0} / {stats.totalHard || 700}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill hard-fill" 
              style={{ width: `${calculatePercentage(stats.hardSolved, stats.totalHard)}%` }}
            ></div>
          </div>
          <p>{calculatePercentage(stats.hardSolved, stats.totalHard)}%</p>
        </div>
      </div>

      {stats.acceptanceRate && (
        <div className="acceptance-rate">
          <h4>Acceptance Rate</h4>
          <div className="rate-display">{stats.acceptanceRate}%</div>
        </div>
      )}
    </div>
  );
};

export default LeetCodeStats;
