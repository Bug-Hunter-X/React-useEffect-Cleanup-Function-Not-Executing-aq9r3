# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with the cleanup function in React's `useEffect` hook.  The example shows a component that logs the current count to the console on every render and logs a message on unmount.  Under certain conditions the cleanup function does not execute as expected leading to unexpected behavior.

## Problem

The problem is that while the component unmounts, its cleanup function is unexpectedly not always called, causing unwanted console messages or side-effects.

## Solution

The solution demonstrates how to correctly manage the dependencies array in useEffect to fix this.  The revised code will only call the cleanup function when the component unmounts. 