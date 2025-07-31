DROP DATABASE IF EXISTS bug_tracker;
CREATE DATABASE bug_tracker;
USE bug_tracker;

-- Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100),
    role ENUM('reporter', 'developer', 'admin') DEFAULT 'reporter',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Platforms table
CREATE TABLE platforms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Issues table
CREATE TABLE issues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    reporter_id INT,
    assignee_id INT,
    platform_id INT,
    status ENUM('open', 'in_progress', 'resolved', 'closed') DEFAULT 'open',
    priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (reporter_id) REFERENCES users(id),
    FOREIGN KEY (assignee_id) REFERENCES users(id),
    FOREIGN KEY (platform_id) REFERENCES platforms(id)
);

-- Attachments table
CREATE TABLE attachments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    issue_id INT,
    file_url VARCHAR(255),
    file_type ENUM('screenshot', 'video'),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (issue_id) REFERENCES issues(id)
);

-- Performance metrics table
CREATE TABLE performance_metrics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    issue_id INT,
    fps FLOAT,
    memory_mb INT,
    load_time_seconds FLOAT,
    measured_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (issue_id) REFERENCES issues(id)
);

INSERT INTO platforms (name) VALUES 
('UE5'), 
('MetaHuman'), 
('CC4'), 
('CC5'), 
('iClone8'), 
('Blender');

-- Seed test user
INSERT INTO users (username, email, role) VALUES 
('casey', 'casey@example.com', 'admin');

INSERT INTO issues (title, description, reporter_id, assignee_id, platform_id, status, priority) VALUES
('Crash on launch in UE5', 'The application crashes on launch when loading certain assets.', 3, 2, 1, 'open', 'urgent'),
('Animation desync in MetaHuman', 'Lip sync breaks during rapid movements.', 3, 2, 2, 'in_progress', 'high');

INSERT INTO attachments (issue_id, file_url, file_type) VALUES
(1, 'https://example.com/screenshots/crash-log.png', 'screenshot'),
(2, 'https://example.com/videos/lipsync-bug.mp4', 'video');

INSERT INTO performance_metrics (issue_id, fps, memory_mb, load_time_seconds) VALUES
(1, 24.5, 4096, 5.2),
(2, 30.0, 3072, 3.8);
