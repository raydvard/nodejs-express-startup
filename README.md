app.js                # App booting point
bin
  |
  └   www             # App entry point (Server Configurations)
src
  │   
  └───api             # Express route controllers for all the endpoints of the app
  └───config          # Environment variables and configuration related stuff
  └───jobs            # Jobs definitions for Job Libraries
  └───loaders         # Split the startup process into modules
  └───models          # Database models
  └───services        # All the business logic is here
  └───subscribers     # Event handlers for async task
  └───plugins         # External Plugins