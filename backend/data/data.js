const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Ravinder Nath",
        email: "ravindern@chetu.com",
      },
      {
        name: "Niraj Roy",
        email: "nirajr@chetu.com",
      },
    ],
    id: "0001",
    chatName: "Ravinder Nath",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Nitin Kumar",
        email: "nitink@chetu.com",
      },
      {
        name: "Rajesh",
        email: "rajeshp@chetu.com",
      },
    ],
    id: "0002",
    chatName: "Nitin Kumar",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Sabab khan",
        email: "sababk@chetu.com",
      },
      {
        name: "Rajesh",
        email: "rajeshp@chetu.com",
      },
    ],
    id: "0003",
    chatName: "Sabab khan",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Rajesh",
        email: "rajeshp@chetu.com",
      },
      {
        name: "Ravinder Nath",
        email: "ravindern@chetu.com",
      },
      {
        name: "Nitin Kumar",
        email: "nitink@chetu.com",
      },
    ],
    id: "0004",
    chatName: "Friends",
    groupAdmin: {
      name: "Ravinder Nath",
      email: "ravindern@chetu.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Pramod kumar",
        email: "pramodk@chetu.com",
      },
      {
        name: "Niraj Roy",
        email: "nirajr@chetu.com",
      },
    ],
    id: "0005",
    chatName: "Pramod kumar",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Niraj Roy",
        email: "jon@example.com",
      },
      {
        name: "Ram Gopal",
        email: "ramg@chetu.com",
      },
      {
        name: "Rajesh",
        email: "rajeshp@chetu.com",
      },
    ],
    id: "0006",
    chatName: "Adda",
    groupAdmin: {
      name: "Niraj Roy",
      email: "nirajr@chetu.com",
    },
  },
];

module.exports= {chats};