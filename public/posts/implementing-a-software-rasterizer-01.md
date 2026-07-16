## Introduction

This is probably one of the less original things to do as a graphics project, but I still wanted to have a go at it. I'll try to cover how I optimized my naive ideas into something that can actually run reasonably.

But first, what is the role of a rasterizer in a graphics pipeline? Well, its goal is, as surprising as it is, to rasterize! More seriously, historically, the process of rasterizing is to convert an image in a vector graphics format to a raster image that can actually be displayed to the screen. Take a triangle for example, it is very useful to represent it as the 3 vertices that define it, because we can do a lot of transformations / computations with them. It is though not very useful to display it on a screen: how do we know which pixels of the screen are covered by this triangle? This is where the rasterizer comes in. It takes this triangle and will determine which pixels are covered by it, and will fill them with the right color.


## Starting point

So what is our starting point? Let's take a random 2D triangle. It's defined by its 3 vertices that are just 2D positions.
```cpp
struct Float2
{
  float x, y;
};

struct Triangle
{
  Float2 v0, v1, v2;
};
```

Great. For now, we will say that our triangle coordinates are in pixels, and are all inside the screen bounds. How can we determine if a pixel position is covered by the triangle? Intuitevely, we can say that if we see the edges as vectors (that is with a direction), then a pixel is covered by the triangle if it is on the left side of all 3 edges of the triangle. Here when I say on the left of an edge, I mean relatively to the edge direction.

![alt text](/public/img/test.png)

```cpp 
```