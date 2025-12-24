import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '696'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fc3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'efd'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '853'),
                exact: true
              },
              {
                path: '/docs/module-1-ros2/',
                component: ComponentCreator('/docs/module-1-ros2/', 'd34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/chapter-1-introduction',
                component: ComponentCreator('/docs/module-1-ros2/chapter-1-introduction', '12f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/chapter-2-architecture',
                component: ComponentCreator('/docs/module-1-ros2/chapter-2-architecture', 'b1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/chapter-3-topics',
                component: ComponentCreator('/docs/module-1-ros2/chapter-3-topics', '668'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/chapter-4-services-actions',
                component: ComponentCreator('/docs/module-1-ros2/chapter-4-services-actions', '73d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/chapter-5-python-agents',
                component: ComponentCreator('/docs/module-1-ros2/chapter-5-python-agents', '7d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/chapter-6-urdf-modeling',
                component: ComponentCreator('/docs/module-1-ros2/chapter-6-urdf-modeling', '17c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/chapter-7-end-to-end',
                component: ComponentCreator('/docs/module-1-ros2/chapter-7-end-to-end', 'c51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/',
                component: ComponentCreator('/docs/module-2-digital-twin/', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/chapter-1-digital-twins',
                component: ComponentCreator('/docs/module-2-digital-twin/chapter-1-digital-twins', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/chapter-2-gazebo-architecture',
                component: ComponentCreator('/docs/module-2-digital-twin/chapter-2-gazebo-architecture', '9bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/chapter-3-physics-simulation',
                component: ComponentCreator('/docs/module-2-digital-twin/chapter-3-physics-simulation', '6f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/chapter-4-ros2-integration',
                component: ComponentCreator('/docs/module-2-digital-twin/chapter-4-ros2-integration', 'cf7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/chapter-5-unity-interaction',
                component: ComponentCreator('/docs/module-2-digital-twin/chapter-5-unity-interaction', '845'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/chapter-6-simulated-sensors',
                component: ComponentCreator('/docs/module-2-digital-twin/chapter-6-simulated-sensors', '9c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/chapter-7-ai-training',
                component: ComponentCreator('/docs/module-2-digital-twin/chapter-7-ai-training', 'c91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-robot-brain/',
                component: ComponentCreator('/docs/module-3-ai-robot-brain/', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-robot-brain/chapter-1-simulation-intelligence',
                component: ComponentCreator('/docs/module-3-ai-robot-brain/chapter-1-simulation-intelligence', 'f1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-robot-brain/chapter-2-isaac-platform',
                component: ComponentCreator('/docs/module-3-ai-robot-brain/chapter-2-isaac-platform', '767'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-robot-brain/chapter-3-isaac-sim-worlds',
                component: ComponentCreator('/docs/module-3-ai-robot-brain/chapter-3-isaac-sim-worlds', 'd16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-robot-brain/chapter-4-synthetic-data',
                component: ComponentCreator('/docs/module-3-ai-robot-brain/chapter-4-synthetic-data', '16f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-robot-brain/chapter-5-isaac-ros-perception',
                component: ComponentCreator('/docs/module-3-ai-robot-brain/chapter-5-isaac-ros-perception', '398'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-robot-brain/chapter-6-vslam-navigation',
                component: ComponentCreator('/docs/module-3-ai-robot-brain/chapter-6-vslam-navigation', '122'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-robot-brain/chapter-7-vla-systems',
                component: ComponentCreator('/docs/module-3-ai-robot-brain/chapter-7-vla-systems', 'd09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla-systems/',
                component: ComponentCreator('/docs/module-4-vla-systems/', '363'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla-systems/chapter-1-vla-physical-ai',
                component: ComponentCreator('/docs/module-4-vla-systems/chapter-1-vla-physical-ai', 'e85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla-systems/chapter-2-speech-to-text',
                component: ComponentCreator('/docs/module-4-vla-systems/chapter-2-speech-to-text', '605'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla-systems/chapter-3-language-understanding',
                component: ComponentCreator('/docs/module-4-vla-systems/chapter-3-language-understanding', '5bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla-systems/chapter-4-llm-planning',
                component: ComponentCreator('/docs/module-4-vla-systems/chapter-4-llm-planning', '0cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla-systems/chapter-5-vision-action',
                component: ComponentCreator('/docs/module-4-vla-systems/chapter-5-vision-action', '9e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla-systems/chapter-6-ros2-orchestration',
                component: ComponentCreator('/docs/module-4-vla-systems/chapter-6-ros2-orchestration', 'b3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla-systems/chapter-7-capstone',
                component: ComponentCreator('/docs/module-4-vla-systems/chapter-7-capstone', '82d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla-systems/reference-terminology',
                component: ComponentCreator('/docs/module-4-vla-systems/reference-terminology', 'b34'),
                exact: true
              },
              {
                path: '/docs/module-4-vla-systems/style-guide',
                component: ComponentCreator('/docs/module-4-vla-systems/style-guide', '9a8'),
                exact: true
              },
              {
                path: '/docs/module-5-real-world-humanoids/',
                component: ComponentCreator('/docs/module-5-real-world-humanoids/', '542'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-5-real-world-humanoids/chapter-1-simulation-reality',
                component: ComponentCreator('/docs/module-5-real-world-humanoids/chapter-1-simulation-reality', '1e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-5-real-world-humanoids/chapter-2-sim-to-real-transfer',
                component: ComponentCreator('/docs/module-5-real-world-humanoids/chapter-2-sim-to-real-transfer', '501'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-5-real-world-humanoids/chapter-3-system-integration',
                component: ComponentCreator('/docs/module-5-real-world-humanoids/chapter-3-system-integration', 'f0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-5-real-world-humanoids/chapter-4-safety-human-interaction',
                component: ComponentCreator('/docs/module-5-real-world-humanoids/chapter-4-safety-human-interaction', '6a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-5-real-world-humanoids/chapter-5-testing-validation',
                component: ComponentCreator('/docs/module-5-real-world-humanoids/chapter-5-testing-validation', '7a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-5-real-world-humanoids/chapter-6-performance-evaluation',
                component: ComponentCreator('/docs/module-5-real-world-humanoids/chapter-6-performance-evaluation', '198'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-5-real-world-humanoids/chapter-7-deployment-maintenance',
                component: ComponentCreator('/docs/module-5-real-world-humanoids/chapter-7-deployment-maintenance', 'd43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-6-advanced-topics/',
                component: ComponentCreator('/docs/module-6-advanced-topics/', 'e4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-6-advanced-topics/chapter-1-scaling-physical-ai',
                component: ComponentCreator('/docs/module-6-advanced-topics/chapter-1-scaling-physical-ai', '412'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-6-advanced-topics/chapter-2-performance-optimization',
                component: ComponentCreator('/docs/module-6-advanced-topics/chapter-2-performance-optimization', '426'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-6-advanced-topics/chapter-3-human-robot-collaboration',
                component: ComponentCreator('/docs/module-6-advanced-topics/chapter-3-human-robot-collaboration', '224'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-6-advanced-topics/chapter-4-continuous-learning',
                component: ComponentCreator('/docs/module-6-advanced-topics/chapter-4-continuous-learning', '803'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-6-advanced-topics/chapter-5-reliability-governance',
                component: ComponentCreator('/docs/module-6-advanced-topics/chapter-5-reliability-governance', 'bf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-6-advanced-topics/chapter-6-emerging-trends',
                component: ComponentCreator('/docs/module-6-advanced-topics/chapter-6-emerging-trends', '7c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-6-advanced-topics/chapter-7-future-embodied',
                component: ComponentCreator('/docs/module-6-advanced-topics/chapter-7-future-embodied', 'f5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-7-capstone-eval/',
                component: ComponentCreator('/docs/module-7-capstone-eval/', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-7-capstone-eval/assessment-rubric',
                component: ComponentCreator('/docs/module-7-capstone-eval/assessment-rubric', '655'),
                exact: true
              },
              {
                path: '/docs/module-7-capstone-eval/capstone-project-template',
                component: ComponentCreator('/docs/module-7-capstone-eval/capstone-project-template', 'f97'),
                exact: true
              },
              {
                path: '/docs/module-7-capstone-eval/chapter-1-capstone-overview',
                component: ComponentCreator('/docs/module-7-capstone-eval/chapter-1-capstone-overview', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-7-capstone-eval/chapter-2-system-architecture',
                component: ComponentCreator('/docs/module-7-capstone-eval/chapter-2-system-architecture', '384'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-7-capstone-eval/chapter-3-end-to-end-pipeline',
                component: ComponentCreator('/docs/module-7-capstone-eval/chapter-3-end-to-end-pipeline', '605'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-7-capstone-eval/chapter-4-evaluation-metrics',
                component: ComponentCreator('/docs/module-7-capstone-eval/chapter-4-evaluation-metrics', '9fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-7-capstone-eval/chapter-5-failure-modes',
                component: ComponentCreator('/docs/module-7-capstone-eval/chapter-5-failure-modes', '2df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-7-capstone-eval/chapter-6-documentation-demos',
                component: ComponentCreator('/docs/module-7-capstone-eval/chapter-6-documentation-demos', '657'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-7-capstone-eval/chapter-7-real-world-applications',
                component: ComponentCreator('/docs/module-7-capstone-eval/chapter-7-real-world-applications', '22b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '70e'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '315'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f86'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '9f6'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'b91'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '272'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
