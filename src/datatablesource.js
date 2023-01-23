
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "dob",
    headerName: "Date of Birth",
    width: 200,
  },
  
  {
    field: "address",
    headerName: "Address",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
  },
   {
    field: "Technologies",
    headerName: "Technologies",
    width: 200,
  },
     {
    field: "specializations",
    headerName: "Specializations",
    width: 200,
  },
     {
    field: "employment",
    headerName: "Employment Status",
    width: 200,
  },
       {
    field: "Description",
    headerName: "Description",
    width: 250,
  },
 
 
 
  

];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Power",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    dob: '10/10/10',
    address: "cole farm",
    phone: "077283022",
    Technologies: "HTML,CSS,JAVASCRIPT",
    specializations: 'Frontend',
    employment: "Unemployed",
    Description: 'I am a ful front-end developer cant tell how much i can do just hired'  
  },
    {
    id: 2,
    username: "Power",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    dob: '10/10/10',
    address: "cole farm",
    phone: "077283022",
    Technologies: "HTML,CSS,JAVASCRIPT",
    specializations: 'Frontend',
    employment: "Unemployed",
    Description: 'I am a ful front-end developer cant tell how much i can do just hired'  
  },
    {
    id: 3,
    username: "Power",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "samuel@gmail.com",
    dob: '10/10/10',
    address: "cole farm",
    phone: "077283022",
    Technologies: "HTML,CSS,JAVASCRIPT",
    specializations: 'Frontend',
    employment: "Unemployed",
    Description: 'I am a ful front-end developer cant tell how much i can do just hired'  
  },
  
];
