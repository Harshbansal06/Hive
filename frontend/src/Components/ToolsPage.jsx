import {useState} from 'react';
import {Search ,Menu ,X} from 'lucide-react';
import SideBar from '/sidebar.jsx';
import SearchBar from '/searchBar.jsx';

const tools = [
  {
    id: 1,
    name: "Soldering Iron Kit",
    description: "Temperature controlled soldering station with accessories",
    image: solderingIron,
    available: 8,
    status: "AVAILABLE",
  },
  {
    id: 2,
    name: "Digital Multimeter",
    description: "Auto-ranging multimeter for voltage, current, resistance measurement",
    image: multimeter,
    available: 15,
    status: "AVAILABLE",
  },
  {
    id: 3,
    name: "Oscilloscope",
    description: "Digital storage oscilloscope, 100MHz bandwidth",
    image: oscilloscope,
    available: 4,
    status: "LIMITED",
  },
  {
    id: 4,
    name: "3D Printer",
    description: "FDM 3D printer with 220x220x250mm build volume",
    image: printer3d,
    available: 3,
    status: "LIMITED",
  },
  {
    id: 5,
    name: "Wire Stripper",
    description: "Automatic wire stripping tool for various gauges",
    image: wireStripper,
    available: 12,
    status: "AVAILABLE",
  },
  {
    id: 6,
    name: "Power Supply",
    description: "Adjustable DC bench power supply, 0-30V, 0-10A",
    image: powerSupply,
    available: 10,
    status: "AVAILABLE",
  },
  {
    id: 7,
    name: "esp32",
    description: "Low-cost, low-power system-on-chip (SoC) with integrated Wi-Fi and Bluetooth",
    image: "https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32d_0.png",
    available: 15,
    status: "AVAILABLE",
},
{
    id: 8,
    name: "L298N motor driver",
    description: "Dual H-Bridge motor driver for controlling DC motors and stepper motors",
    image: "https://components101.com/sites/default/files/component_pin/L298N-Motor-Driver-Module-Pinout.png",
    available: 8,
    status: "AVAILABLE",
},
];

function StatusBadge({ status }) {
  const isAvailable = status === "AVAILABLE";
  return (
    <span
      className={`rounded px-2 py-1 text-[10px] font-bold tracking-wider font-mono ${
        isAvailable
          ? "bg-[#064E3B] text-[#34D399]"
          : "bg-[#78350F] text-[#F59E0B]"
      }`}
    >
      {status}
    </span>
  );
}

function StatusBadge({status})
{
  const isAvailabele = status === "AVAILABLE";
  return (
    <span className ={
      isAvailabele
        ? "bg-[#064E3B] text-[#34D399]"
        : "bg-[#78350F] text-[#F59E0B]"
    }>
      {status}
    </span>
  );

}

function toolCard({tool})
{
  return (
    <div className = "flex flex-col rounded-xl border border-gold/30 bg-surface p-4 transition-colorshover:border-gold/70">
    <img src ={tool.image || "/placeholder.svg"} alt = {tool.name} className ="h-44 w-full rounded-lg object-cover"
    />

    <h3 className='mt-4 text-lg font-semibold text-[#F9FAFB]'>{tool.name}</h3>
    <p className='mt-1 text-sm leading-relasxed text-[#9CA3AF]'>{tool.description}</p>

    <div className="mt-4 flex items-center justify-between">
        <span className="font-mono text-xs text-[#9CA3AF]">
          {"Available: "}
          {tool.available}
        </span>
        <StatusBadge status={tool.status} />
        </div>

        <button
        type="button"
        className="mt-4 w-full rounded-lg bg-gold py-2.5 text-sm font-semibold text-[#0A0E17] transition-opacity hover:opacity-90"
      >
        Borrow
      </button>




    </div>


  )
}

function ToolsPage() {
  return (
    <>



    </>
  )
}
export default ToolsPage