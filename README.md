# Tribbble View


## Tribbble Name
I decided to use this name for avoid issues with Dribbble [Terms and Guidelines](http://developer.dribbble.com/terms/)

So I picked Tribbble with "T" that ressambles the name Dribbble :)

## Public API
This application was developed using Dribbble public API

### This API allows:
- retrieve shots sorted by popularity
- retrieve shots details like views, comments and likes
- perform pagination

### This API DOES NOT allow
- login and act on behalf of users
- like/dislike shots
- perform server-side search on shots

### Why I did not use authenticated API
The authenticated API uses oAuth and in the process it was returning CORS errors. I tried to contact the support with no luck.

## What this Application includes
- Listing of shots sorted by popularity
- Toggling the image size using a button on toolbar
- Details modal showing views and likes and more details
- Search on loaded shots
- Ability to load more on bottom
- **(BONUS)** hosted [here](https://carniatto.github.io/Tribbble-View/) and works fine on mobile

## Future improvements
- Unit Testing (setup is ready)
- Documentation using [Compodoc](https://compodoc.github.io/website/)
- Improve usage using authenticated API

## How to run

1. clone the repo
```bash
git clone https://github.com/Carniatto/Tribbble-View.git TribbbleView
```

2. install dependencies
```bash
cd TribbbleView
npm install
```

3. run the application
```bash
ng serve
```

4. access the application
Open browser and access [http://localhost:4200](http://localhost:4200)

## Author
### **Mateus Carniatto**

github: https://github.com/Carniatto

codepen: https://codepen.io/Carniatto/

LinkedIn: https://www.linkedin.com/in/carniatto/
