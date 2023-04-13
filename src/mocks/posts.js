
const posts = [
    {
        id: 1,
        author: "fluffypaws12",
        title: "My fluffy cat!",
        content: "Check out my cute little fluffball! She loves to nap and play with string.",
        imageUrl: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/04/fluffy-cat-breeds-birman.jpg?fit=728%2C524",
        likes: 10,
        comments: [
            {
                id: 1,
                author: "crazycatlady",
                content: "Aww, what a cute kitty! I have a fluffy cat too.",
                likes: 3
            },
            {
                id: 2,
                author: "doglover4ever",
                content: "I'm more of a dog person, but your cat is adorable.",
                likes: 1
            }
        ]
    },
    {
        id: 2,
        author: "pawsandclaws",
        title: "My loyal dog",
        content: "Meet my best friend, Spot! He's always by my side and loves to go on walks.",
        imageUrl: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ",
        likes: 15,
        comments: [
            {
                id: 1,
                author: "crazycatlady",
                content: "I'm more of a cat person, but your dog is pretty cute.",
                likes: 2
            },
            {
                id: 2,
                author: "doglover4ever",
                content: "Spot looks like such a good boy! I have a dog too.",
                likes: 6
            }
        ]
    },
    {
        id: 3,
        author: "purrfectkitten",
        title: "My playful kitten",
        content: "This is my kitten, Mittens! She loves to play with yarn and chase her tail.",
        imageUrl: "https://i.pinimg.com/originals/a2/59/16/a25916e872c90b1321f0554ca83e38a6.png",
        likes: 8,
        comments: [
            {
                id: 1,
                author: "crazycatlady",
                content: "Your kitten is so adorable! I love her little white paws.",
                likes: 4
            },
            {
                id: 2,
                author: "doglover4ever",
                content: "I'm more of a dog person, but your kitten is super cute!",
                likes: 1
            }
        ]
    },
    {
        id: 4,
        author: "pawsandclaws",
        title: "My cuddly pup",
        content: "Meet my new puppy, Fido! He loves to snuggle and play fetch.",
        imageUrl: "https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/home-and-garden/pets/dogs/new-puppy-getting-it-right-on-the-first-night-434396968-768.jpg",
        likes: 12,
        comments: [
            {
                id: 1,
                author: "crazycatlady",
                content: "I'm more of a cat person, but your puppy is too cute!",
                likes: 2
            },
            {
                id: 2,
                author: "doglover4ever",
                content: "Fido looks like such a good boy! I have a dog too.",
                likes: 6
            }
        ]
    },
    {
        id: 5,
        author: "featheredfriends",
        title: "My talkative bird",
        content: "Say hello to my bird, Polly! She loves to chat and sing.",
        imageUrl: "https://www.cdc.gov/healthypets/images/pets/birds-pet-parrot.jpg?_=61106ttps://www.example.com/images/talkative_bird.jpg",
        likes: 6,
        comments: [
            {
                id: 1,
                author: "birdwatcher",
                content: "Your bird is beautiful! What kind of bird is she?",
                likes: 3
            },
            {
                id: 2,
                author: "crazycatlady",
                content: "I'm not a bird person, but Polly is very pretty.",
                likes: 1
            }
        ]
    }
]


export default posts;