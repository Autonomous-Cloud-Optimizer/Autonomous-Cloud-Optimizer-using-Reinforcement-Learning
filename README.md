
# Autonomous Cloud Optimizer Using Reinforcement Learning

A self-learning Reinforcement Learning–based system that autonomously manages and optimizes cloud resources to reduce cost, maintain SLA, and improve performance.

## About

This project implements an AI-driven Autonomous Cloud Optimizer that uses Reinforcement Learning (RL) to make intelligent cloud scaling and resource allocation decisions. Unlike traditional threshold-based autoscalers, this system learns continuously from real-time cloud metrics and workload patterns.

The agent observes CPU usage, memory usage, request rate, and latency, then decides whether to scale up, scale down, adjust resource limits, or keep the current configuration. A reward system guides the agent to minimize cost while maintaining service performance.

## Features

Reinforcement Learning–based autoscaling

Cost-efficient & SLA-aware optimization

Real-time metrics–driven decision-making

Kubernetes or simulator-based deployment

Custom Gym environment for RL training

Prometheus integration for monitoring

## 🏗 Architecture
```
RL Agent (PPO/DQN/SAC)
        ↓ Actions
Cloud Environment (K8s / Simulator)
        ↑ Observations
Metrics Collector (Prometheus)
        ↑ Reward
Reward Engine
```
## System Requirements

The project can run on any modern operating system, including Windows, Linux, or macOS. A minimum of 8 GB RAM and a dual-core processor (Intel i5 or equivalent) is recommended for smooth execution. At least 2 GB of free disk space is required for dependencies and logs. An active internet connection is necessary for dependency installation and optional cloud deployment.

## Software Requirements

Node.js (version 16 or above) must be installed to run the backend server and autoscaling logic. npm is required for dependency management. A modern web browser such as Google Chrome, Edge, or Firefox is needed to access the dashboard interface. Git must be installed to clone and manage the repository.

For reinforcement learning extensions, Python 3.8 or higher is required along with common ML libraries such as NumPy and TensorFlow or PyTorch (optional). These are not mandatory for running the autoscaler simulation but are needed for advanced RL experimentation.

## Libraries and Frameworks

The backend uses Express.js for API handling and system monitoring. The frontend relies on HTML, CSS, JavaScript, and Chart.js for real-time visualization. Additional Node.js packages are listed in the package.json file and will be installed automatically using npm.


## 🧠 RL Components
State (Input to the Agent):

CPU & memory utilization

Latency (p50/p95/p99)

Request rate

Active replicas

Node resource availability

Instance cost

## Actions:

Scale replicas (+1, -1, no-op)

Adjust CPU/Memory limits

Change instance type

Reward Function (Simplified):
reward = -(sla_violation + cost) + utilization_bonus

## 🛠 Tech Stack

Python

Stable Baselines3

Kubernetes / Minikube / Kind

Prometheus + Grafana

Docker

CloudSim or Custom RL environments

## 📁 Project Structure
```
autonomous-cloud-optimizer/
│
├── envs/               # RL training environments
├── agents/             # PPO, DQN, SAC agent implementations
├── k8s/                # Kubernetes manifests
├── metrics/            # Prometheus queries & scripts
├── notebooks/          # Experiment & result notebooks
├── scripts/            # Utilities, load testing
├── train.py            # Train the RL agent
├── evaluate.py         # Evaluate trained agent
└── README.md           # Documentation
```


## 📈 Results

Lower cloud cost

Higher resource utilization

Stable scaling behavior

Improved SLA compliance
(You can add charts here later.)

## 🔮 Future Enhancements

Multi-agent RL

Serverless autoscaling

Forecasting + RL hybrid model

Energy-efficient optimization

## 🤝 Contributing

Pull requests and issues are welcome!

