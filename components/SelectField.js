import { FieldProps } from "formik";
import React from "react";
import Select, { Option, ReactSelectProps } from "react-select";

const SelectField = ({ options, field, form }) => (
  <Select
    options={options}
    name={field.name}
    value={
      options ? options.find((option) => option.value === field.value) : ""
    }
    onChange={(option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
    styles={{
      control: (provided) => {
        delete provided.border;
        delete provided.borderColor;
        delete provided.borderRadius;

        return {
          ...provided,
        };
      },
      singleValue: (provided) => {
        delete provided.color;

        return {
          ...provided,
        };
      },
      // option: (provided, state) => ({
      //   ...provided,
      // }),
    }}
  />
);

export default SelectField;
