const cities = [
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Algiers",
  "Africa/Bissau",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/El_Aaiun",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Khartoum",
  "Africa/Lagos",
  "Africa/Maputo",
  "Africa/Monrovia",
  "Africa/Nairobi",
  "Africa/Ndjamena",
  "Africa/Sao_Tome",
  "Africa/Tripoli",
  "Africa/Tunis",
  "Africa/Windhoek",
];

const cities_africa = [];
cities.forEach((ele)=>{
    cities_africa.push(ele.substring(7));
})
export default cities_africa;