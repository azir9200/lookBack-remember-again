import PhoneCard from "../PhoneCard/PhoneCard";


const Phones = ({ Phones }) => {

  console.log(Phones)
  return (
    <div className="py-10">
      <h1>All categories Phones</h1>
      <div>
        {
          Phones?.map(phone => <PhoneCard key={phone.id} phone={phone} ></PhoneCard>)
        }

      </div>
    </div>
  );
};

export default Phones;