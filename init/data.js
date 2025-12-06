const sampledata = [
  {
    "title": "Bhahubali",
    "img": "https://pbs.twimg.com/media/DM0VbI-V4AAlbb0.jpg",
    "link":"https://youtu.be/sOEg_YZQsTI?si=njEidkhgQhIlE05A",
    "description": "Shivudu, a young man with extraordinary strength, discovers his mysterious past and his true destiny when he climbs a forbidden waterfall and enters the ancient kingdom of Mahishmati. There, he learns about his father, Amarendra Baahubali, a great warrior king, and the betrayal that changed the fate of the empire.",
    "genre": "Action, Drama, Fantasy"
  },
  {
    "title": "Pushpa",
    "img": "https://m.media-amazon.com/images/M/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc@._V1_.jpg",
    "link":"https://youtu.be/Q1NKMPhP8PY?si=7S-Uy0wdNuYP1XsV",
    "description": "Set in the dense forests of Andhra Pradesh, Pushpa: The Rise follows the journey of Pushpa Raj, a coolie who rises to power in the world of red sandalwood smuggling. With sheer ambition, cunning strategy, and fearless attitude, Pushpa challenges the existing syndicate and law enforcement. But as his power grows, so do his enemies, setting the stage for an explosive confrontation.",
    "genre": "Action, Crime, Drama"
  },
  {
    "title": "RRR",
    "img": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/250px-RRR_Poster.jpg",
    "link":"https://youtu.be/NgBoMJy386M?si=3HfZfqrAZs3hu9tT",
    "description": "RRR is an epic tale of two legendary revolutionaries, Alluri Sitarama Raju and Komaram Bheem, who embark on a fiery journey to fight against British colonial rule in India. Set in the 1920s, the film portrays a fictionalized story of their brotherhood, sacrifice, and rebellion. With breathtaking action, emotional depth, and grand visuals, RRR captures the essence of freedom and friendship.",
    "genre": "Action, Drama, Historical Fiction"
  },
  {
    "title": "Sita ramam",
    "img": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sita_Ramam.jpg/250px-Sita_Ramam.jpg",
    "link":"https://youtu.be/Ljk6tGZ1l3A?si=sIY32eOsvIiim8qo",
    "description": "Sita Ramam is a timeless love story set against the backdrop of war and politics in 1960s India. The film follows Lieutenant Ram, a lonely soldier stationed at the Kashmir border, who begins to receive anonymous love letters from a woman named Sita. As their emotional bond deepens through letters, Ram sets out on a journey to find her and reveal the truth. Years later, a young woman in present-day Pakistan is tasked with delivering one of Ram’s undelivered letters, unraveling a touching tale of love, sacrifice, and destiny..",
    "genre": "Romance, Drama, Mystery"
  },
  {
    "title": "Geetha govindam",
    "img": "https://m.media-amazon.com/images/M/MV5BNWI3OTcwN2EtMDQ2MS00YTQ2LTliZDEtYTM4YTIzNDU5ODMyXkEyXkFqcGc@._V1_.jpg",
    "link":"https://youtu.be/OYK2eJ0oeg8?si=OttoCWRzAIK1-VXN",
    "description": "Geetha Govindam is a light-hearted romantic tale that follows Vijay Govind, a sincere and well-mannered college lecturer, who dreams of a perfect love story. His life takes an unexpected turn when he mistakenly kisses Geetha, a bold and independent woman, leading to a series of hilarious misunderstandings and dramatic encounters. As Vijay tries to win her trust and affection, the two navigate love, respect, and destiny in this heartwarming rom-com.",
    "genre": "Romantic Comedy, Drama"
  },
  {
    "title": "KGF Chapter 2",
    "img": "https://m.media-amazon.com/images/S/pv-target-images/95e90345c39c56004a13170186b1e0abe16cb6d5f2010101a0c982ba727162dc.jpg",
    "link":"https://youtu.be/bDTUFufX-1s?si=AdKkGlAJcrLVMVXg",
    "description": "KGF: Chapter 2 continues the epic saga of Rocky Bhai, who has now seized control of the Kolar Gold Fields (KGF) after defeating Garuda. He is seen as a messiah by the miners, but his rise also attracts powerful enemies.",
    "genre": "Action, Crime, Drama"
  },
  {
    "title": "Jawan",
    "img": "https://resizing.flixster.com/lej1aNFjcromN2hYS5-638hSJ-k=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FiOWE5MWYxLTc0MzctNGNjZi1hMjE0LWNhZmZiMDU2M2RhMS5qcGc=",
    "link":"https://youtu.be/db6e22CkmJY?si=5i4JGmN6zNqzJOU_",
    "description": "Jawan is a high-octane action thriller that follows the story of Azad, a jailer who secretly leads a team of skilled women convicts on vigilante missions to fight corruption and injustice in Indian society. Unknown to the world, Azad is also searching for the truth about his father — Vikram Rathore, a former army officer wronged by the system.",
    "genre": "Action, Thriller"
  },
  {
    "title": "12th Fail",
    "img": "https://m.media-amazon.com/images/M/MV5BNTE3OTIxZDYtNjA0NC00N2YxLTg1NGQtOTYxNmZkMDkwOWNjXkEyXkFqcGc@._V1_.jpg",
    "link":"https://youtu.be/DgI7us6v9sg?si=uTaoqKi7l6J3RES_",
    "description": "12th Fail tells the inspiring real-life story of Manoj Kumar Sharma, who comes from a poor background in a small village in Chambal, Madhya Pradesh. Despite failing in his 12th standard exams and facing extreme poverty, police brutality, and corruption around him, Manoj refuses to give up on his dream of becoming an IPS officer",
    "genre": "Biography, Drama"
  },
   {
    "title": "Jersey",
    "img": "https://cinemachaat.com/wp-content/uploads/2020/02/jersey-poster.jpeg?w=400",
    "link":"https://youtu.be/AjAe_Q1WZ_8?si=5BdXCu8jiQVXAx_M",
    "description": "Jersey is the emotional story of Arjun, a once-promising Ranji cricketer from Hyderabad whose career was cut short in the 1980s. The film picks up in the late 1990s, where Arjun is now unemployed, struggling financially, and living with his wife Sarah and their young son Nani..",
    "genre": "Sports, Drama, Inspirational"
  },
  {
    "title": "Sarileru Neekevvaru",
    "img": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17661787_p_v8_ab.jpg",
    "link":"https://youtu.be/Pim3CUGCXbY?si=LLiDzmt7jEzHjmXr",
    "description": "Ajay Krishna, an Indian Army major, is disciplined, brave, and patriotic. He’s sent on a mission to Kurnool to deliver news to the family of a fellow soldier who is injured.There, he meets Bharathi, a strong-willed college professor who fights against corrupt MLA Nagendra. Ajay steps in to protect her and her family, taking on the corrupt political system with his military wit and action skills.",
    "genre": "Action, Comedy, Drama"
  },
]
module.exports = {data : sampledata};
