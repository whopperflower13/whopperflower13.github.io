const blogPosts = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      author: "John Doe",
      content:
        "I was zooming in on the browser, hoping zooming in on the background would trigger the webpage to progress. Finally I was able to figure out that resizing the width of the browser was the trigger, greeted by an animation of the sun rising as I narrowed the browser tab. It gave me insight on bringing the mobile ui into the pc browser.",
      date: "2024-08-01",
      tags: ["JavaScript", "Programming", "Web Development"],
    },
    {
      id: 2,
      title: "A Beginner's Guide to CSS Grid",
      author: "Jane Smith",
      content:
      "Struggling to resize browser Trying to decode finger input with mouse input. Astonished by the visuals; how they are animated and react to the user input (shadows of the helicopter in start screen). Following the navigation tutorial. Fidgeting with the sound design (music stops on mouse hold, focusing on environmental sound in each scene). Panning around each environment, looking for easter eggs and view the whole scene. Moving the dial to progress time.",
      date: "2024-08-05",
      tags: ["CSS", "Web Design", "Frontend"],
    },
    {
      id: 3,
      title: "10 Tips for Effective Remote Work",
      author: "Alex Johnson",
      content:
        "I enjoyed the animation sequence in each scene the most. The irregular appearance triggers (start, interaction, secret) kept me entertained and focused. I found myself analysing the colors, sound, and animation while watching the short movies.",
      date: "2024-08-10",
      tags: ["Productivity", "Remote Work", "Lifestyle"],
    },
    {
      id: 4,
      title: "Exploring the New Features in React 18",
      author: "Emily Davis",
      content:
        "I spent most of my time simply admiring the audio and visuals, immersing myself in an italian summer dream from my cold melbourne home. I was panning around in search of the secret elements, or closing my eyes to dream of what summer would be.",
      date: "2024-08-15",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 5,
      title: "The Ultimate Guide to SEO in 2024",
      author: "Michael Lee",
      content:
        "I think the primary goal of this website is to provide the user with the ideal eternal summer experience, embracing the season, to make users crave for a summer getaway. They absolutely nailed it, making me want to travel to a warmer climate as soon as possible.",
      date: "2024-08-20",
      tags: ["SEO", "Marketing", "Web Development"],
    },
    {
        id: 5,
        title: "The Ultimate Guide to SEO in 2024",
        author: "Michael Lee",
        content:
          "The audio and visuals strongly contribute to the primary goal, through the summer aesthetic of animation and music. The user is dragged into the experience through immersive audio features and an easter egg hidden to keep the users attention and providing the goal further contribution with interactivity.",
        date: "2024-08-20",
        tags: ["SEO", "Marketing", "Web Development"],
      },
      {
        id: 5,
        title: "The Ultimate Guide to SEO in 2024",
        author: "Michael Lee",
        content:
          "The more the experience is interacted with, the less time will be spent on the animation like i did, instead i was driven more to the scene view of each timeframe. I also headed to the product page to see how the inspiration (eternal summer) influenced the product (Richard Mille watch).",
        date: "2024-08-20",
        tags: ["SEO", "Marketing", "Web Development"],
      },
      {
        id: 5,
        title: "The Ultimate Guide to SEO in 2024",
        author: "Michael Lee",
        content:
          "Yes. The interactive experience is largely connected to sound and controlling what the user sees. I think this choice keeps the interactive element less boring even toward the end of the experience and or future revisits to the website.",
        date: "2024-08-20",
        tags: ["SEO", "Marketing", "Web Development"],
      },
      {
        id: 5,
        title: "The Ultimate Guide to SEO in 2024",
        author: "Michael Lee",
        content:
          "The watch and this advertisement campaign is inspired by Memphis Design, an Italian art movement from the 1980s. The watch was inspired by the vibrant and dynamic use of color and shape of Memphis design. Richard Mille has incorporated the design into their innovative and high performance watch products.",
        date: "2024-08-20",
        tags: ["SEO", "Marketing", "Web Development"],
      },
      {
        id: 5,
        title: "The Ultimate Guide to SEO in 2024",
        author: "Michael Lee",
        content:
          "The philosophy behind Memphis Design is what I look up to. The founding of this art movement was after the minimalist design style of the 1960s to 70s. The artist group’s dislike of minimalism had led to the creation of the design we know today. I want to keep a critical perspective on societal norms, and have a strong foundation and understanding of my philosophy and principles.",
        date: "2024-08-20",
        tags: ["SEO", "Marketing", "Web Development"],
      },
      {id: 5,
        title: "The Ultimate Guide to SEO in 2024",
        author: "Michael Lee",
        content:
          "The keywords that come to mind are playful, adventurous, and explorative. Additionally, I want the user to treat the experience as an opportunity to reflect on your own principles. Think objectively, how you would reinterpret the original experience and build it.",
        date: "2024-08-20",
        tags: ["SEO", "Marketing", "Web Development"],
      },
      {id: 5,
        title: "The Ultimate Guide to SEO in 2024",
        author: "Michael Lee",
        content:
          "Finding a way to enter the website start page was the biggest obstacle in this interaction. The instructions were too vague, me and my friend misunderstood ‘resize browser’ as ‘zoom in’.",
        date: "2024-08-20",
        tags: ["SEO", "Marketing", "Web Development"],
      },
      {id: 5,
        title: "The Ultimate Guide to SEO in 2024",
        author: "Michael Lee",
        content:
          "Progressing time to unlock a new scene and hunting for secret elements was the most satisfying part. Setting small goals throughout the interaction treated me with small rewards, and kept me immersed in the interaction.",
        date: "2024-08-20",
        tags: ["SEO", "Marketing", "Web Development"],
      },
  ];

  const container = document.querySelector("#grid-container");
  console.log(container);

  let postContent = "";

  for (let i = 0; i<blogPosts.length; i++)
  {
    postContent +=  `
    <section id="box${i+1}">
    <h1> ${blogPosts[i.title]} </h1>
    <p> ${blogPosts[i].content}</p>

    </section>

    `;

  }

  console.log(postContent);
  container.innerHTML = postContent;