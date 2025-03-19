import Select from "../../components/select";

const HomeView = () => {
  return (
    <div>
      <Select
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        onChange={console.log}
      />
    </div>
  );
};

export default HomeView;
