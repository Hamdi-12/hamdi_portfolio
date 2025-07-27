import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch repos from GitHub API
    fetch('https://api.github.com/users/Hamdi-12/repos?sort=updated')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching repos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: 20 }}>Loading projects...</p>;
  }

  return (
    <section
      id="projects"
      style={{
        maxWidth: 900,
        marginTop: '3rem',
        padding: '0 1rem',
        width: '100%',
      }}
    >
      <h2
        style={{
          color: '#b96111',
          fontSize: '2.8rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          textAlign: 'center',
          textShadow: '1px 1px 3px rgba(185, 97, 17, 0.5)',
        }}
      >
        My GitHub Projects
      </h2>

      {repos.length === 0 && <p>No public repositories found.</p>}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.6rem',
        }}
      >
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: '#fff5e6',
              padding: '1.4rem',
              borderRadius: 12,
              boxShadow: '0 4px 8px rgba(185, 97, 17, 0.15)',
              color: '#b96111',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 150,
            }}
          >
            <h3 style={{ marginBottom: '0.6rem', fontWeight: '700', fontSize: '1.3rem' }}>
              {repo.name}
            </h3>
            <p style={{ flexGrow: 1, fontSize: '0.95rem', color: '#8a5015', marginBottom: '1rem' }}>
              {repo.description ? repo.description : 'No description'}
            </p>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: '600',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
