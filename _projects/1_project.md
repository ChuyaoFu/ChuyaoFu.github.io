---
layout: page
title: Desktop Manipulation via 3D Diffusion Policy
description: Implementation of 3D diffusion policy for desktop manipulation tasks, including environment setup, data collection, policy training, and evaluation.
img: assets/img/projects/Final project V4(1).png
importance: 4
category: systems
---

## Project Overview

This project explores real-world desktop manipulation with 3D Diffusion Policy (DP3). I built an end-to-end pipeline that maps visual observations and robot states directly to actions, covering data collection, camera calibration, point-cloud preprocessing, policy training, and deployment on a physical robot platform.

## Technical Details

The system uses an Intel RealSense D435 camera and an ARX X5 robotic arm to collect synchronized demonstrations, including depth images, RGB images, robot states, and actions. To make real-world observations suitable for DP3, I calibrated the camera, transformed depth images into point clouds, and designed a preprocessing pipeline based on workspace cropping and farthest point sampling. The final policy takes a 1024×3 point cloud and a 7D robot state as input and predicts 7D actions for manipulation.

## Results

The trained policy was deployed on several real-world tasks, including putting a lemon into a bowl, lifting a bowl, and pushing a drawer. The project shows the feasibility of adapting DP3 to real robotic manipulation, while also revealing practical challenges such as sensitivity to demonstration quality, limited generalization, and motion jitter during deployment.
