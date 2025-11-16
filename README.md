# Technical Lesson: RecipeHub

## Overview
In this technical lesson, we will cover how to design and structure components, understand the component tree hierarchy, and pass data between components using props.

## Scenario
You are working on a project for a recipe app called "RecipeHub." The app displays a list of recipes, including details like ingredients and instructions. To make the app dynamic and reusable, you need to use a component-based approach and pass data between components using props

## Tasks
RecipeHub needs a component-based structure to:
- Display a list of recipes
- Show recipe details, including the title, ingredients and instructions
- Pass data between components using props

## Component Tree
```
└── App
    ├── RecipeList
    |   └── RecipeCard
    └── Footer
```

####  Component Files
Contains following component files:
- `App.jsx`
- `RecipeList.jsx`
- `RecipeCard.jsx`
- `Footer.jsx`

## Setup

1. Run the following commands:
```
   npm install
   npm run dev

```