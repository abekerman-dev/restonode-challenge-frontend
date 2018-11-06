# True North Sr Fullstack Challenge - Restonode 

## Frontend component

This repo contains the frontend of the *Restonode* restaurants management system which is made up of two other components/repos:

1. [REST API](https://github.com/abekerman-dev/truenorth-restonode-challenge-api)
2. [Order messaging service](https://github.com/abekerman-dev/truenorth-restonode-challenge-order-messaging-service) 
    
The former is in charge of creating delivery orders among other functions, whereas the latter handles incoming RabbitMQ messages sent through the former upon delviery order creation.

## Running the whole *Restonode* system

As the *Restonode* restaurants management is divided up into three components/repos, in order for the system to run as a whole each component must be launched individually, explained right below.

So in order to run the whole *Restonode* system there are two alternatives:

1. "Manual" execution
2. With docker
    
> Of course, you'll first have to clone/download this repo and then follow either of the execution alternatives below.

So let's explore these alternatives further:

### Running manually

First, clone or download this repo.

In order to be able to execute this application manually, the following dependencies have to be already installed:
 
  1. [Node.js](https://nodejs.org/en/)
  2. [npm](https://www.npmjs.com/get-npm)
  3. [Angular CLI](https://github.com/angular/angular-cli)

In order to get the other two components up and running as well, please refer to each repo's *README* file where you'll find instructions on how to do that just like here.

> **Important note:** make sure the REST API component is up and running, either manually or with docker - otherwise the whole usage of this frontend is rendered useless.

Once the previous steps have been accomplished and everything is in place, simply run `ng serve` and point your browser to `http://localhost:4200/`.

### Running *with docker*

The three repos comprising *Restonode* are *docker-ready*, so it's highly advised getting the whole system to run through this method. How? Simple!

Just run `docker-compose up` and it'll trigger the build of a Node.js image with this frontend code as an Angular 7.0.4 application to run on top of it.

> Note: The first time it gets executed it'll take quite some time to download Node.js image and npm and Angular CLI, so be patient while it's doing its job!

#### The frontend is now up and running and can start hitting the REST API.

## High-level architecture

### Code

This frontend is just an Angular application generated with Angular CLI 7.0.4, hence I only had to follow Angular's unique way to building a frontend.

The API consists of *create* and *list* components for the following models: restaurant, meal and order, along with services to get and post data for those.

## Wishlist, a.k.a what's been left outside and I wish could sometime get in there (lack of time is to blame!)

There are a number of things that had to be left outside this application just because of lack of time, not desire:

1. As this turned out to be a very rough, simplistic development-like frontend (and my very first using the newest Angular!) I wish I could've come up with something more sophisticated like users/roles such that restaurant owners on the one hand and end customers on the other hand would get their own UIs and the other role's simply not visible or accessible.

2. Again, as this was my very first time with this technology, I could not find the time to delve into the mechanics of frontend testing, so that was completely neglected and I understand it also plays an important role just like in backend development.

## Author

* **Andrés Bekerman** - [GitHub](https://github.com/abekerman-dev)

