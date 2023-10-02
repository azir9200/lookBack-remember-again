import PhoneCard from "../PhoneCard/PhoneCard";


const Phones = ({ phones }) => {


  return (
    <div className="py-10">
      <h1>All categories Phones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 " >
        {
          phones?.map(phone => <PhoneCard key={phone.id} phone={phone} ></PhoneCard>)
        }

      </div>
    </div>
  );
};

export default Phones;