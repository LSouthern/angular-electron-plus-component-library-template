# Important Note:
After you've cloned the repo delete the `.git` directory in the application otherwise all changes you make will be pushed to this repository.

If you wish to rename your project from angular-library-template to something else, replace that name with the one you want everywhere it shows prior to running `npm i`.

If you're new to git / github I recommend you read this stack overflow thread to help you get set up:
https://stackoverflow.com/questions/12799719/how-to-upload-a-project-to-github


Once you clone the project, run `npm i` to install the dependencies.
_____________________________________________________________________________________________________________________________________________________________
# Angular Electron Application Template With Library.

This template is for people who want to get started building a desktop application using the angular framework. 

To start the application, run `npm start`. This will also build the project before starting however it's up to you if you decide to modify the script.

The window configuration is located in `main.js` at the root of the application. You can find more about electron at this link:
https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites


In order to create components and load them into the application, please read the instructions below. They are the same as the ones in the other, non-electron template.


_____________________________________________________________________________________________________________________________________________________________
# Empty Angular Project with Local Component Library
This project is a template for anyone who wants to create an angular application with a component's library.


I personally find component libraries to be incredibly useful as I can build my components individually outside of the application.
To do that, I use a UI component tool called storybook to build and test my components. There most likely are others out there but I've used this
one at work so I guess I'm used to it. It's pretty good.


FYI the `src` directory is the application and the `projects` folder is the library.... I just wanted to point that out incase it was unclear for those of you who aren't familiar with the names etc.


## Step 1
In order to create a component and use it in your application, go to the lib directory in projects and run:

`ng g c <component-name>`

The newly generated component will need to be added to the public-api.ts file in the lib as it is not done automatically.


## Step 2
Open the public-api.ts file and, for your new component, export the component.ts file like so:

`export * from 'path/to/component'`

For a button component for example, this would be:

`export * from './lib/button/button'`

You don't need to add the file extension at the end.


## Step 3
In the src directory in the root of the application, open app.module.ts and import the button component in the declarations section of @NgModule underneath 'AppComponent'.

That's it. The component is imported. To test it, insert it into the app.component.html file:

`<lib-component-name></lib-component-name>`


Run `npm start`. Your screen should show `"<component-name> works!"` (providing you left the component alone before importing it).



Bellow is the link to the video I followed but I thought publishing this template might save a lot of you some time.

https://www.youtube.com/watch?v=69lLzjXwuww


That's basically it. Thank you so much for using this template and thank you to the guy I copied from for showing me how to do it lol. I hope you all make some pretty cool stuff.



One additional thing you could do that I've gotten into the habit of doing is using a UI Framework to build and test my individual components in an isolated environment before using them in the app.
The one I use is called storybook which is something I've been using during my day job so that's why I've stuck with it but I'm sure there are others out there.

If you want to give that a go, the link is just below.... lol, that rhymed:
https://storybook.js.org/




P.S.

Please don't hesitate to pass on any advice my way for things I could've done better. I'm very much still learning about writing software and development practices so I appreciate the feedback.


Thanks!

