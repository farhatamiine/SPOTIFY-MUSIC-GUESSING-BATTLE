import React from "react";

function UserInput({}) {
  return (
    <div>
      <div class="col-span-6 sm:col-span-3">
        <textarea
          type="text"
          name="first-name"
          id="first-name"
          cols={30}
          rows={7}
          autocomplete="given-name"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 h-full block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}

export default UserInput;
