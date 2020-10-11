import React from "react"
import useAutocomplete from "@material-ui/lab/useAutocomplete"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"

const ListBox = styled.div`
  .listBox {
    max-height: 200px;
  }
  .listBox li[data-focus="true"] {
    background-color: #4a8df6;
    color: white;
    cursor: pointer;
  }

  .listBox li:active {
    background-color: #2977f5;
    color: white;
  }
`

export default function UseAutocomplete({ accommodations }) {
  const history = useHistory()
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value, // Selected item
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: accommodations,
    getOptionLabel: (option) => option.name,
  })

  return (
    <div className="p-3">
      <form onSubmit={() => history.push(`/hotels/${value ? value.id : ""}`)}>
        <div
          className="relative text-gray-600 focus-within:text-gray-400"
          {...getRootProps()}
        >
          <input
            className="p-3 rounded-md w-full shadow-lg outline-none"
            placeholder="Search for Hotels"
            {...getInputProps()}
          />
          <span class="absolute inset-y-0 right-0 flex items-center px-2">
            <button class="p-1 focus:outline-none focus:shadow-outline">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
        </div>
      </form>
      {groupedOptions.length > 0 ? (
        <ListBox className="absolute z-50 w-full left-0 px-3">
          <ul
            className={`listBox bg-white shadow-lg rounded-lg list-none overflow-auto`}
            {...getListboxProps()}
          >
            {groupedOptions.map((option, index) => (
              <li className="p-4 w-full" {...getOptionProps({ option, index })}>
                {option.name}
              </li>
            ))}
          </ul>
        </ListBox>
      ) : null}
    </div>
  )
}
