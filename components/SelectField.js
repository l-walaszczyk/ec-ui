// import { FieldProps } from "formik";
import React from "react";
import Select from "react-select";

const SelectField = ({ options, field, form }) => (
  <Select
    options={options}
    name={field.name}
    value={
      options ? options.find((option) => option.value === field.value) : ""
    }
    isSearchable={false}
    onChange={(option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
    styles={{
      control: (provided) => {
        delete provided.boxShadow;
        return {
          ...provided,
        };
      },
    }}
  />
);

export default SelectField;
