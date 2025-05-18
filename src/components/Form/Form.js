import React from "react";

export const Form = ({ name, action, children }) => {
  return (
    <form
      className="w-5/12 bg-slate-800 border-black border rounded border-"
      action={action}
    >
      <h1 className="text-slate-100 text-4xl font-bold text-center mt-5 mb-12">
        {name}
      </h1>

      {React.Children.map(children, (child, index) => (
        <div className="my-4" key={index}>
          {child}
        </div>
      ))}
    </form>
  );
};

export const Section = ({ children }) => {
  return (
    <div className="flex w-12/12">
      {React.Children.map(children, (child, index) => (
        <div className="flex w-6/12" key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};

export const Label = ({ name, text }) => {
  return (
    <label className="text-slate-100 text-2xl ml-auto p-3" htmlFor={name}>
      {text}
    </label>
  );
};

export const Input = ({ type, name, id, placeholder }) => {
  return (
    <input
      className="text-slate-100 text-2xl bg-slate-600 p-3"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

export const Button = ({ text, type }) => {
  return (
    <button
      className="text-slate-100 text-3xl bg-slate-500 px-5 py-3 mt-12 rounded-3xl mx-auto cursor-pointer"
      type={type}
    >
      {text}
    </button>
  );
};
