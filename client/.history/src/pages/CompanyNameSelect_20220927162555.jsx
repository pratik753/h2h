import React from 'react'

function CompanyNameSelect() {
  return (
    <div>
      <div class="grid grid-cols-2 gap-8">
        <div class="relative">
          <input
            class="hidden group peer"
            type="radio"
            name="shippingOption"
            value="standard_alt"
            id="standard_alt"
          />

          <label
            class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
            for="standard_alt"
          >
            <span> Standard </span>

            <span class="block mt-1 text-xs text-gray-500"> Free </span>
          </label>

          <svg
            class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div class="relative">
          <input
            class="hidden group peer"
            type="radio"
            name="shippingOption"
            value="next_day_alt"
            id="next_day_alt"
          />

          <label
            class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500"
            for="next_day_alt"
          >
            <span> Next Day </span>

            <span class="block mt-1 text-xs text-gray-500"> $ 5.99 </span>
          </label>

          <svg
            class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CompanyNameSelect