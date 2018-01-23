# CSS Animations and transitions

<iframe width="550px" height="250px" src="https://majapersson.github.io/csslesson/pacman.html" style="border: none; overflow: hidden;"></iframe>
Today we'll learn how to use animations and transitions in CSS.

## Transitions
> CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized. - [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

## Animations
> CSS animations make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components, a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation's style, as well as possible intermediate waypoints - [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

## Assignments
1. Create a new HTML document with five squares. Create a [transition](http://cssreference.io/transitions) that changes the background color of each square when you hover over it.

2. Copy the previous assignments HTML document. This time create an [animation](http://cssreference.io/animations) using [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) that moves the squares 250px to the right. Try out the properties animation-duration, -delay and -timing-function to see the differences.

3. Create a new HTML document and add a [circle](https://davidwalsh.name/css-circles) with the width and height of 200px. Animate the circle to make it bounce up and down.

    **Requirements:**
    - The circle should be positioned in the center of the viewport using flexbox.
    - The animation should [run forever](http://cssreference.io/property/animation-iteration-count).
    <br /><br />

4. Create a new HTML document and try to [replicate this hover effect](https://youtu.be/aF9usAfMlRE) with CSS's transition property.

5. Create a new HTML document and animate a rectangle with CSS's [animation](http://cssreference.io/animations) property.

    **Requirements:**
    - The rectangle should change color at least once.
    - The rectangle should change position at least twice.
    - The animation should start and stop at the same position.
    - The animation should [run forever](http://cssreference.io/property/animation-iteration-count).
    <br /><br />

6. Create a new HTML document and try to replicate the Pacman loading animation at the top of this page.

    > **Tip:** Use a combination of different [shapes](https://css-tricks.com/examples/ShapesOfCSS/) to draw figures using only CSS.

7. Go to [codepen.io](https://codepen.io) and search for CSS animations. Choose a pen and try to replicate it without looking too much at the code.
