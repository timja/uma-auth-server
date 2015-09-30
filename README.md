Uma Authorisation Server
=======================

### Prerequisites

* Install npm

Then run: 
```
npm install
```

Use forever to update after file changes
```
npm install -g forever
```

Then use something like:
```
forever --watch --watchDirectory routes/ --watchIgnore *.log bin/www
```

