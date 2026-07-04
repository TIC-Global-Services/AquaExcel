"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import filterIcon from "@/assets/contact/icon/mynaui_filter-solid.svg";
import ContainerLayout from "@/layouts/ContainerLayout";
import { dealersData } from "@/components/contact/dealersData";

const map = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(10);
  }, [searchQuery, selectedState, selectedDistrict, selectedArea]);

  // Extract unique values for filters
  const states = useMemo(() => {
    return Array.from(new Set(dealersData.map((d) => d.state).filter(Boolean))).sort();
  }, []);

  const districts = useMemo(() => {
    let filtered = dealersData;
    if (selectedState) {
      filtered = filtered.filter((d) => d.state === selectedState);
    }
    return Array.from(new Set(filtered.map((d) => d.district).filter(Boolean))).sort();
  }, [selectedState]);

  const areas = useMemo(() => {
    let filtered = dealersData;
    if (selectedState) {
      filtered = filtered.filter((d) => d.state === selectedState);
    }
    if (selectedDistrict) {
      filtered = filtered.filter((d) => d.district === selectedDistrict);
    }
    return Array.from(new Set(filtered.map((d) => d.area).filter(Boolean))).sort();
  }, [selectedState, selectedDistrict]);

  const filteredDealers = useMemo(() => {
    return dealersData.filter((dealer) => {
      const matchesSearch = searchQuery
        ? (dealer.dealername?.toLowerCase().includes(searchQuery.toLowerCase()) ||
           dealer.area?.toLowerCase().includes(searchQuery.toLowerCase()) ||
           dealer.district?.toLowerCase().includes(searchQuery.toLowerCase()) ||
           dealer.state?.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;

      const matchesState = selectedState ? dealer.state === selectedState : true;
      const matchesDistrict = selectedDistrict ? dealer.district === selectedDistrict : true;
      const matchesArea = selectedArea ? dealer.area === selectedArea : true;

      return matchesSearch && matchesState && matchesDistrict && matchesArea;
    });
  }, [searchQuery, selectedState, selectedDistrict, selectedArea]);

  return (
    <ContainerLayout>
      <div className="pb-16">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-[20px] md:text-[44px] tracking-tighter font-hoves-pro font-medium tracking-[-4%]">
            Find a Dealer
          </h1>
          <p className="font-inter-tight font-regular text-sm lg:text-xl leading-[120%] text-black text-center max-w-3xl">
            Find the closest Aqua Excel dealer with ease. Search nearby
            locations and connect with verified partners instantly.
          </p>
        </div>
        
        {/* Search and Filters Section */}
        <div className="flex flex-col w-full max-w-4xl mx-auto gap-4 mt-8 px-4">
          <div className="flex w-full gap-3 relative">
            <div className="w-full relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Dealer Name, City, or Area"
                className="w-full px-4 py-2 md:py-3.5 bg-[#FAF9F5] border border-[#646464] rounded-lg font-inter-tight placeholder:text-[12px] placeholder:md:text-base placeholder:font-medium text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-[#E31E24] transition-colors"
              />
            </div>
            {/* <div className="shrink-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`border border-[#646464] rounded-lg p-2 md:p-3.5 hover:bg-gray-50 transition-colors h-full flex items-center justify-center ${
                  showFilters ? "bg-gray-200" : "bg-[#FAF9F5]"
                }`}
                title="Toggle Filters"
              >
                <Image src={filterIcon} alt="Filter" className="w-6 h-6" />
              </button>
            </div> */}
          </div>

     
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setSelectedDistrict("");
                    setSelectedArea("");
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#E31E24] bg-white text-sm h-[38px]"
                >
                  <option value="">All States</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value);
                    setSelectedArea("");
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#E31E24] bg-white text-sm h-[38px]"
                >
                  <option value="">All Districts</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#E31E24] bg-white text-sm h-[38px]"
                >
                  <option value="">All Areas</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedState("");
                    setSelectedDistrict("");
                    setSelectedArea("");
                  }}
                  className="w-full h-10 px-4 py-2 bg-[#E31E24] text-white border border-[#E31E24] rounded-md font-medium text-sm hover:bg-[#E31E24] hover:text-white transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
       
        </div>

       

        {/* Dealer Cards Grid */}
        <div className="w-full mt-12 px-[5%] md:px-[8%]">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Dealers ({filteredDealers.length})
          </h2>
          {filteredDealers.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDealers.slice(0, visibleCount).map((dealer, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {dealer.dealername}
                    </h3>
                    <div className="flex-grow">
                      <p
                        className="text-gray-600 text-sm mb-4 leading-relaxed"
                        title={dealer.address}
                      >
                        {dealer.address}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {dealer.area && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {dealer.area}
                          </span>
                        )}
                        {dealer.district && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {dealer.district}
                          </span>
                        )}
                        {dealer.state && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {dealer.state}
                          </span>
                        )}
                      </div>
                    </div>
                    {dealer.location ? (
                      <a
                        href={dealer.location}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-full px-4 py-2 bg-[#E31E24] text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Get Directions
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex justify-center items-center w-full px-4 py-2 bg-gray-200 text-gray-500 text-sm font-medium rounded-lg cursor-not-allowed"
                      >
                        Directions Unavailable
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {visibleCount < filteredDealers.length && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 10)}
                    className="px-6 py-3 bg-white border border-[#E31E24] text-[#E31E24] font-semibold rounded-lg hover:bg-[#E31E24] hover:text-white transition-colors"
                  >
                    Show More
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200 shadow-inner">
              <p className="text-gray-500 text-lg">
                No dealers found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedState("");
                  setSelectedDistrict("");
                  setSelectedArea("");
                }}
                className="mt-4 text-[#E31E24] font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default map;
