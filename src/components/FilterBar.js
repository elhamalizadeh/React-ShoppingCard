import { Box } from "@mui/material";
import { useState } from "react";

const FilterBar = ({ colors, brands, onFilterName ,onFilterBrand ,onFilterColor, onFilterFrom,onFilterTo}) => {
//   const [name, setName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [color, setColor] = useState("");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");

// a better solotion is :
const [filters, setFilters] = useState({
    name:"",
    brand:"",
    color:"",
    from:"",
    to:""
});


  const handleInputChange = (field) => (e) => {
    const { value } = e.target;

    switch (field) {
      case "name":
        onFilterName(value);
        break;

      case "brand":
        onFilterBrand(value);
        break;

      case "color":
        onFilterColor(value);
        break;

      case "from":
        onFilterFrom(value);
        break;

      case "to":
        onFilterTo(value);
        break;

      default:
        break;
    }
  };
  return (
    <Box flex={2} p={2}>
      <Box>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
        //   value={filters.name}
          onChange={handleInputChange("name")}
        />
      </Box>

      <Box>
        <label htmlFor="brand">Brand</label>
        <select className="form-control" id="brand"  onChange={handleInputChange("brand")} multiple>
          <option value="">Select</option>
          {brands.map((brand) => (
            <option value={brand} key={brand}>
              {brand}
            </option>
          ))}
        </select>
      </Box>
      <Box>
        <label htmlFor="color">Color</label>
        <select className="form-control" id="color" onChange={handleInputChange("color")} multiple>
          <option value="">Select</option>
          {colors.map((color) => (
            <option value={color} key={color}>
              {color}
            </option>
          ))}
        </select>
      </Box>
      <Box>
        <label htmlFor="startDate">From</label>
        <input type="date" className="form-control" id="startDate" onChange={handleInputChange("from")}/>
      </Box>
      <Box>
        <label htmlFor="endDate">To</label>
        <input type="date" className="form-control" id="endDate" onChange={handleInputChange("to")}/>
      </Box>
    </Box>
  );
};

export default FilterBar;
