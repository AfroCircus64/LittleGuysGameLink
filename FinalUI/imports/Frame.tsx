import React, { useEffect, useState } from "react";
import svgPaths from "./svg-1i8p95orav";
import imgImg from "../../images/LGG.jpg";

// Types
type Issue = {
  id: string | number;
  code: string;
  title: string;
  status: string;
  priority: string;
  platform: string;
  assignee?: string;
  reportedAt?: string;
};

type Project = {
  id: string | number;
  name: string;
};

function FrameSidebar() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [recentProjects, setRecentProjects] = useState<Project[]>([]);

  // Fetch issues and projects from backend
  useEffect(() => {
    fetch("/api/bugs")
      .then((res) => res.json())
      .then(setIssues);

    fetch("/api/projects")
      .then((res) => res.json())
      .then(setRecentProjects)
      .catch(() => setRecentProjects([])); // fallback if endpoint doesn't exist
  }, []);

  // Compute status counts
  const statusCounts = {
    open: issues.filter((i) => i.status === "Open").length,
    inProgress: issues.filter((i) => i.status === "In Progress").length,
    testing: issues.filter((i) => i.status === "Testing").length,
    resolved: issues.filter((i) => i.status === "Resolved").length,
  };

  return (
    <aside>
      {/* Example: Status Cards */}
      <div>
        <div>Open: {statusCounts.open}</div>
        <div>In Progress: {statusCounts.inProgress}</div>
        <div>Testing: {statusCounts.testing}</div>
        <div>Resolved: {statusCounts.resolved}</div>
      </div>
      {/* Example: Recent Projects */}
      <div>
        <h4>Recent Projects</h4>
        <ul>
          {recentProjects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
      {/* ...rest of your sidebar/components... */}
    </aside>
  );
}

function Div() {
  return (
    <div
      className="absolute bg-[#1a237e] left-0 rounded-lg size-10 top-0.5"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-lg"
      />
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold h-7 leading-[0] left-[5.27px] not-italic text-[#ffffff] text-[20px] text-left top-2 w-[35px]">
        <p className="block leading-[normal]">GD</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[52px] top-0 w-[133.344px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-7 leading-[0] left-0 not-italic text-[#ffffff] text-[18px] text-left top-0 w-[134px]">
        <p className="block leading-[28px]">GameDev Suite</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#9e9e9e] text-[12px] text-left top-7 w-[109px]">
        <p className="block leading-[16px]">Professional Tools</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-4 relative shrink-0 w-2.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 16"
      >
        <g id="Frame">
          <path d="M10 16H0V0H10V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p31e57680}
            fill="var(--fill-0, #9E9E9E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-0 overflow-clip p-0 top-1 w-2.5"
      data-name="Frame"
    >
      <Frame />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-[213px] top-2.5 w-2.5"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame1 />
    </div>
  );
}

function Div2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-4 top-4 w-[223px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Div />
      <Div1 />
      <Button />
    </div>
  );
}

function Div3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[77px] left-0 top-0 w-[255px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-gray-800 border-solid inset-0 pointer-events-none"
      />
      <Div2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_624)">
            <path
              d={svgPaths.p1f641380}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_624">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0.5 p-0 size-4 top-1"
      data-name="svg"
    >
      <Frame2 />
    </div>
  );
}

function I() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-3 top-2 w-5"
      data-name="i"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Svg />
    </div>
  );
}

function Span() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-10 top-2 w-[91.594px]"
      data-name="span"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-0.5 w-[92px]">
        <p className="block leading-[normal]">Bug Tracker</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div
      className="absolute bg-[#1a237e] h-10 left-0 rounded-md top-0 w-[239px]"
      data-name="span"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-md"
      />
      <I />
      <Span />
    </div>
  );
}

function Li() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-0 w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Span1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-4 relative shrink-0 w-[18px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_630)">
            <path
              d={svgPaths.pdc51380}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_630">
            <path d="M0 0H18V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-[13px] overflow-clip p-0 top-3 w-[18px]"
      data-name="Frame"
    >
      <Frame3 />
    </div>
  );
}

function Li1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-11 w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-10 not-italic text-[#9e9e9e] text-[16px] text-left top-0 w-[115px]">
        <p className="block leading-[24px]">Asset Manager</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_618)">
            <path
              d={svgPaths.p21b10200}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_618">
            <path d="M0 0H14V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-[15px] overflow-clip p-0 top-3 w-3.5"
      data-name="Frame"
    >
      <Frame5 />
    </div>
  );
}

function Li2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-[88px] w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-10 not-italic text-[#9e9e9e] text-[16px] text-left top-0 w-[116px]">
        <p className="block leading-[24px]">Documentation</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-4 relative shrink-0 w-5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_591)">
            <path
              d={svgPaths.p2ba74100}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_591">
            <path d="M0 0H20V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-3 overflow-clip p-0 top-3 w-5"
      data-name="Frame"
    >
      <Frame7 />
    </div>
  );
}

function Li3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-[132px] w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-10 not-italic text-[#9e9e9e] text-[16px] text-left top-0 w-[87px]">
        <p className="block leading-[24px]">Automation</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_615)">
            <path
              d={svgPaths.p2e18f270}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_615">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-3.5 overflow-clip p-0 size-4 top-3"
      data-name="Frame"
    >
      <Frame9 />
    </div>
  );
}

function Li4() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-44 w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-10 not-italic text-[#9e9e9e] text-[16px] text-left top-0 w-[132px]">
        <p className="block leading-[24px]">Release Manager</p>
      </div>
      <Frame10 />
    </div>
  );
}

function Ul() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[216px] left-0 top-6 w-[239px]"
      data-name="ul"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Li />
      <Li1 />
      <Li2 />
      <Li3 />
      <Li4 />
    </div>
  );
}

function Div4() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-60 left-2 top-4 w-[239px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-4 leading-[0] left-3 not-italic text-[#9e9e9e] text-[12px] text-left top-0 tracking-[0.6px] w-[125px]">
        <p className="adjustLetterSpacing block leading-[16px]">
          Main Navigation
        </p>
      </div>
      <Ul />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-4 relative shrink-0 w-[18px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 16"
      >
        <g id="Frame">
          <path d="M18 16H0V0H18V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p2b97cf00}
            fill="var(--fill-0, #9E9E9E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-[13px] overflow-clip p-0 top-3 w-[18px]"
      data-name="Frame"
    >
      <Frame11 />
    </div>
  );
}

function Li5() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-0 w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-10 not-italic text-[#9e9e9e] text-[16px] text-left top-0 w-[62px]">
        <p className="block leading-[24px]">Projects</p>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-4 relative shrink-0 w-5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_582)">
            <path
              d={svgPaths.p1b4569c0}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_582">
            <path d="M0 0H20V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-3 overflow-clip p-0 top-3 w-5"
      data-name="Frame"
    >
      <Frame13 />
    </div>
  );
}

function Li6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-11 w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-10 not-italic text-[#9e9e9e] text-[16px] text-left top-0 w-[42px]">
        <p className="block leading-[24px]">Team</p>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p1efa7f0}
            fill="var(--fill-0, #9E9E9E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-3.5 overflow-clip p-0 top-3 w-5"
      data-name="Frame"
    >
      <Frame15 />
    </div>
  );
}

function Li7() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-[88px] w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-10 not-italic text-[#9e9e9e] text-[16px] text-left top-0 w-[70px]">
        <p className="block leading-[24px]">Analytics</p>
      </div>
      <Frame16 />
    </div>
  );
}

function Ul1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-32 left-0 top-6 w-[239px]"
      data-name="ul"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Li5 />
      <Li6 />
      <Li7 />
    </div>
  );
}

function Div5() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[152px] left-2 top-[280px] w-[239px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-4 leading-[0] left-3 not-italic text-[#9e9e9e] text-[12px] text-left top-0 tracking-[0.6px] w-[87px]">
        <p className="adjustLetterSpacing block leading-[16px]">Workspace</p>
      </div>
      <Ul1 />
    </div>
  );
}

function Li8() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-0 w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-11 leading-[0] left-10 not-italic text-[#9e9e9e] text-[16px] text-left top-0 w-[106px]">
        <p className="block leading-[24px]">Project Zenith</p>
      </div>
    </div>
  );
}

function Li9() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-11 w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-11 leading-[0] left-10 not-italic text-[#9e9e9e] text-[16px] text-left top-0 w-[118px]">
        <p className="block leading-[24px]">Stellar Odyssey</p>
      </div>
    </div>
  );
}

function Li10() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-[88px] w-[239px]"
      data-name="li"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-11 leading-[0] left-10 not-italic text-[#9e9e9e] text-[16px] text-left top-0 w-[129px]">
        <p className="block leading-[24px]">Quantum Realms</p>
      </div>
    </div>
  );
}

function Ul2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-32 left-0 top-6 w-[239px]"
      data-name="ul"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Li8 />
      <Li9 />
      <Li10 />
    </div>
  );
}

function Div6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[152px] left-2 top-[456px] w-[239px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-4 leading-[0] left-3 not-italic text-[#9e9e9e] text-[12px] text-left top-0 tracking-[0.6px] w-[129px]">
        <p className="adjustLetterSpacing block leading-[16px]">
          Recent Projects
        </p>
      </div>
      <Ul2 />
    </div>
  );
}

function Nav() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[1290px] left-0 top-[77px] w-[255px]"
      data-name="nav"
    >
      <div className="h-[1290px] overflow-clip relative w-[255px]">
        <Div4 />
        <Div5 />
        <Div6 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Img() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[9999px] size-10 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg}')` }}
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
    </div>
  );
}

function Div7() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-[52px] top-0 w-[96.391px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-0 w-[97px]">
        <p className="block leading-[24px]">Alex Morgan</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#9e9e9e] text-[12px] text-left top-6 w-[95px]">
        <p className="block leading-[16px]">Lead Developer</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-4 relative shrink-0 w-1" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4 16"
      >
        <g id="Frame">
          <path d="M4 16H0V0H4V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p1483c000}
            fill="var(--fill-0, #9E9E9E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-0 overflow-clip p-0 top-1 w-1"
      data-name="Frame"
    >
      <Frame17 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-[219px] top-2 w-1"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame18 />
    </div>
  );
}

function Div8() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-10 left-4 top-[17px] w-[223px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Img />
      <Div7 />
      <Button1 />
    </div>
  );
}

function Div9() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[73px] left-0 top-[1367px] w-[255px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px_0px] border-gray-800 border-solid inset-0 pointer-events-none"
      />
      <Div8 />
    </div>
  );
}

function Aside() {
  return (
    <div
      className="absolute bg-[#1e1e1e] h-[1440px] left-0 top-0 w-64"
      data-name="aside"
    >
      <div className="h-[1440px] overflow-clip relative w-64">
        <Div3 />
        <Nav />
        <Div9 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-gray-800 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 16"
      >
        <g id="Frame">
          <path d="M14 16H0V0H14V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p5b73770}
            fill="var(--fill-0, #9E9E9E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-0 overflow-clip p-0 top-1 w-3.5"
      data-name="Frame"
    >
      <Frame19 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-1 w-3.5"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame20 />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="absolute bg-[#1a237e] h-8 left-0 rounded-md top-0 w-[51.25px]"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-5 leading-[0] left-[28.5px] not-italic text-[#ffffff] text-[14px] text-center top-[7px] translate-x-[-50%] w-[33px]">
        <p className="block leading-[normal]">UE5</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="absolute bg-[#2a2a2a] h-8 left-[55.25px] rounded-md top-0 w-[105.438px]"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-5 leading-[0] left-[55.5px] not-italic text-[#9e9e9e] text-[14px] text-center top-[7px] translate-x-[-50%] w-[87px]">
        <p className="block leading-[normal]">MetaHuman</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="absolute bg-[#2a2a2a] h-8 left-[164.69px] rounded-md top-0 w-[87.875px]"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-5 leading-[0] left-[46.5px] not-italic text-[#9e9e9e] text-[14px] text-center top-[7px] translate-x-[-50%] w-[69px]">
        <p className="block leading-[normal]">CC4/CC5</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="absolute bg-[#2a2a2a] h-8 left-[256.56px] rounded-md top-0 w-[75.25px]"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-5 leading-[0] left-[40.5px] not-italic text-[#9e9e9e] text-[14px] text-center top-[7px] translate-x-[-50%] w-[57px]">
        <p className="block leading-[normal]">iClone8</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="absolute bg-[#2a2a2a] h-8 left-[335.81px] rounded-md top-0 w-[75.672px]"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-5 leading-[0] left-[40.5px] not-italic text-[#9e9e9e] text-[14px] text-center top-[7px] translate-x-[-50%] w-[57px]">
        <p className="block leading-[normal]">Blender</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-[30px] top-0 w-[411.484px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Div11() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-4 top-[11.5px] w-[441.484px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Button2 />
      <Div10 />
    </div>
  );
}

function Input() {
  return (
    <div
      className="absolute bg-[#2a2a2a] h-[34px] left-0 rounded-md top-0 w-64"
      data-name="input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-700 border-solid inset-0 pointer-events-none rounded-md"
      />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[34px] justify-center leading-[0] left-9 not-italic text-[#adaebc] text-[14px] text-left top-[17px] translate-y-[-50%] w-64">
        <p className="block leading-[20px]">Search...</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_606)">
            <path
              d={svgPaths.p1d73a600}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_606">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-3 overflow-clip p-0 size-4 top-3.5"
      data-name="Frame"
    >
      <Frame21 />
    </div>
  );
}

function Div12() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[34px] left-0 top-0 w-64"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Input />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_588)">
            <path
              d={svgPaths.p1868abf0}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_588">
            <path d="M0 0H14V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-0 overflow-clip p-0 top-1 w-3.5"
      data-name="Frame"
    >
      <Frame23 />
    </div>
  );
}

function Span2() {
  return (
    <div
      className="absolute bg-[#e53935] left-0.5 rounded-[9999px] size-4 top-[-4px]"
      data-name="span"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[10.78px] not-italic text-[#ffffff] text-[12px] text-center top-0 translate-x-[-50%] w-[13px]">
        <p className="block leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-3.5"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame24 />
      <Span2 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_576)">
            <path
              d={svgPaths.p21a72d80}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_576">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-4 top-1"
      data-name="Frame"
    >
      <Frame25 />
    </div>
  );
}

function Button9() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-[26px] top-0 w-4"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_573)">
            <path
              d={svgPaths.p735f700}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_573">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-4 top-1"
      data-name="Frame"
    >
      <Frame27 />
    </div>
  );
}

function Button10() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-[54px] top-0 w-4"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame28 />
    </div>
  );
}

function Div13() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-[272px] top-[5px] w-[70px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Div14() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[34px] left-[826px] top-[10.5px] w-[342px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Div12 />
      <Div13 />
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute bg-[#1e1e1e] h-14 left-0 top-0 w-[1184px]"
      data-name="header"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-gray-800 border-solid inset-0 pointer-events-none"
      />
      <Div11 />
      <Div14 />
    </div>
  );
}

function Div15() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-14 left-0 top-0 w-[319.562px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-8 leading-[0] left-0 not-italic text-[#ffffff] text-[24px] text-left top-0 w-[145px]">
        <p className="block leading-[32px]">Bug Tracker</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#9e9e9e] text-[16px] text-left top-8 w-80">
        <p className="block leading-[24px]">
          Manage and track issues across platforms
        </p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_567)">
            <path
              d={svgPaths.p2d9f400}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_567">
            <path d="M0 0H14V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 p-0 size-3.5 top-[2.75px]"
      data-name="svg"
    >
      <Frame29 />
    </div>
  );
}

function I1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-3 top-1.5 w-3.5"
      data-name="i"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Svg1 />
    </div>
  );
}

function Button11() {
  return (
    <div
      className="absolute bg-[#2a2a2a] h-8 left-0 rounded-md top-0 w-[79.141px]"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-md"
      />
      <I1 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[53.5px] not-italic text-[#9e9e9e] text-[14px] text-center top-[7px] translate-x-[-50%] w-[39px]">
        <p className="block leading-[normal]">Filter</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-3.5 relative shrink-0 w-[8.75px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_561)">
            <path
              d={svgPaths.p126fa300}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_561">
            <path d="M0 0H8.75V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 p-0 top-[2.75px] w-[8.75px]"
      data-name="svg"
    >
      <Frame30 />
    </div>
  );
}

function I2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-3 top-1.5 w-[8.75px]"
      data-name="i"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Svg2 />
    </div>
  );
}

function Button12() {
  return (
    <div
      className="absolute bg-[#2a2a2a] h-8 left-[91.14px] rounded-md top-0 w-[68.203px]"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-md"
      />
      <I2 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[45.25px] not-italic text-[#9e9e9e] text-[14px] text-center top-[7px] translate-x-[-50%] w-[33px]">
        <p className="block leading-[normal]">Sort</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-3.5 relative shrink-0 w-[12.25px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13 14"
      >
        <g id="Frame">
          <path d="M12.25 14H0V0H12.25V14Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p363f1d80}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 p-0 top-[2.75px] w-[12.25px]"
      data-name="svg"
    >
      <Frame31 />
    </div>
  );
}

function I3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-3 top-1.5 w-[12.25px]"
      data-name="i"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Svg3 />
    </div>
  );
}

function Button13() {
  return (
    <div
      className="absolute bg-[#1a237e] h-8 left-[171.34px] rounded-md top-0 w-[113.094px]"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-md"
      />
      <I3 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[69.25px] not-italic text-[#ffffff] text-[14px] text-center top-[7px] translate-x-[-50%] w-[74px]">
        <p className="block leading-[normal]">New Issue</p>
      </div>
    </div>
  );
}

function Div16() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-[851.56px] top-3 w-[284.438px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Div17() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-14 left-6 top-6 w-[1136px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Div15 />
      <Div16 />
    </div>
  );
}

function Div18() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-[17px] top-[17px] w-[238px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-7 leading-[0] left-0 not-italic text-[#ffffff] text-[18px] text-left top-0.5 w-[47px]">
        <p className="block leading-[28px]">Open</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-8 leading-[0] left-[207.44px] not-italic text-[#ffffff] text-[24px] text-left top-0 w-[31px]">
        <p className="block leading-[32px]">24</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 size-3" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_564)">
            <path
              d={svgPaths.pb078600}
              fill="var(--fill-0, #E53935)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_564">
            <path d="M0 0H12V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-3 top-[3.5px]"
      data-name="Frame"
    >
      <Frame32 />
    </div>
  );
}

function Div19() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[17px] top-[57px] w-[238px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame33 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-5 not-italic text-[#9e9e9e] text-[14px] text-left top-0 w-[99px]">
        <p className="block leading-[20px]">12 high priority</p>
      </div>
    </div>
  );
}

function Div20() {
  return (
    <div
      className="absolute bg-[#1e1e1e] h-[94px] left-0 rounded-lg top-0 w-[272px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-800 border-solid inset-0 pointer-events-none rounded-lg"
      />
      <Div18 />
      <Div19 />
    </div>
  );
}

function Div21() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-[238px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-7 leading-[0] left-0 not-italic text-[#ffffff] text-[18px] text-left top-0.5 w-[98px]">
        <p className="block leading-[28px]">In Progress</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-8 leading-[0] left-[212.48px] not-italic text-[#ffffff] text-[24px] text-left top-0 w-7">
        <p className="block leading-[32px]">18</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 size-3" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_621)">
            <path
              d={svgPaths.pb078600}
              fill="var(--fill-0, #FF9800)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_621">
            <path d="M0 0H12V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-3 top-[3.5px]"
      data-name="Frame"
    >
      <Frame34 />
    </div>
  );
}

function Div22() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[17px] top-[57px] w-[238px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame35 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-5 not-italic text-[#9e9e9e] text-[14px] text-left top-0 w-[118px]">
        <p className="block leading-[20px]">8 assigned to you</p>
      </div>
    </div>
  );
}

function Div23() {
  return (
    <div
      className="absolute bg-[#1e1e1e] h-[94px] left-72 rounded-lg top-0 w-[272px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-800 border-solid inset-0 pointer-events-none rounded-lg"
      />
      <Div21 />
      <Div22 />
    </div>
  );
}

function Div24() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-[17px] top-0 w-[238px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-7 leading-[0] left-0 not-italic text-[#ffffff] text-[18px] text-left top-0.5 w-16">
        <p className="block leading-[28px]">Testing</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-8 leading-[0] left-[222.64px] not-italic text-[#ffffff] text-[24px] text-left top-0 w-4">
        <p className="block leading-[32px]">9</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 size-3" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_585)">
            <path
              d={svgPaths.pb078600}
              fill="var(--fill-0, #29B6F6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_585">
            <path d="M0 0H12V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-3 top-[3.5px]"
      data-name="Frame"
    >
      <Frame36 />
    </div>
  );
}

function Div25() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[17px] top-[57px] w-[238px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame37 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-5 not-italic text-[#9e9e9e] text-[14px] text-left top-0 w-[124px]">
        <p className="block leading-[20px]">3 need verification</p>
      </div>
    </div>
  );
}

function Div26() {
  return (
    <div
      className="absolute bg-[#1e1e1e] h-[94px] left-[576px] rounded-lg top-0 w-[272px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-800 border-solid inset-0 pointer-events-none rounded-lg"
      />
      <Div24 />
      <Div25 />
    </div>
  );
}

function Div27() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-[17px] top-0 w-[238px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-7 leading-[0] left-0 not-italic text-[#ffffff] text-[18px] text-left top-0.5 w-[79px]">
        <p className="block leading-[28px]">Resolved</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-8 leading-[0] left-[208.89px] not-italic text-[#ffffff] text-[24px] text-left top-0 w-[30px]">
        <p className="block leading-[32px]">37</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 size-3" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_612)">
            <path
              d={svgPaths.pb078600}
              fill="var(--fill-0, #43A047)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_612">
            <path d="M0 0H12V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-3 top-[3.5px]"
      data-name="Frame"
    >
      <Frame38 />
    </div>
  );
}

function Div28() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[17px] top-[57px] w-[238px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame39 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-5 not-italic text-[#9e9e9e] text-[14px] text-left top-0 w-[86px]">
        <p className="block leading-[20px]">Last 30 days</p>
      </div>
    </div>
  );
}

function Div29() {
  return (
    <div
      className="absolute bg-[#1e1e1e] h-[94px] left-[864px] rounded-lg top-0 w-[272px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-800 border-solid inset-0 pointer-events-none rounded-lg"
      />
      <Div27 />
      <Div28 />
    </div>
  );
}

function Div30() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[94px] left-6 top-[104px] w-[1136px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Div20 />
      <Div23 />
      <Div26 />
      <Div29 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p1c578e00}
            fill="var(--fill-0, #9E9E9E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 top-1 w-4"
      data-name="Frame"
    >
      <Frame40 />
    </div>
  );
}

function Button14() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-4"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame41 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="h-4 relative shrink-0 w-1" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4 16"
      >
        <g id="Frame">
          <path d="M4 16H0V0H4V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p1483c000}
            fill="var(--fill-0, #9E9E9E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-0 overflow-clip p-0 top-1 w-1"
      data-name="Frame"
    >
      <Frame42 />
    </div>
  );
}

function Button15() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-6 top-0 w-1"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Frame43 />
    </div>
  );
}

function Div31() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-[406px] top-3 w-7"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Div32() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[49px] left-px top-px w-[446px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-gray-800 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-6 leading-[0] left-3 not-italic text-[#ffffff] text-[16px] text-left top-3 w-[86px]">
        <p className="block leading-[24px]">Issues (24)</p>
      </div>
      <Div31 />
    </div>
  );
}

function Span3() {
  return (
    <div
      className="absolute bg-[#e53935] h-6 left-0 rounded top-0 w-[71.109px]"
      data-name="span"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-2 not-italic text-[#ffffff] text-[12px] text-left top-1 w-[61px]">
        <p className="block leading-[normal]">animation</p>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div
      className="absolute bg-[rgba(26,35,126,0.2)] h-6 left-0 rounded top-0 w-[35.266px]"
      data-name="span"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-1.5 not-italic text-[#1a237e] text-[12px] text-left top-0.5 w-[29px]">
        <p className="block leading-[normal]">UE5</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 size-3" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_549)">
            <path
              d={svgPaths.p1f06bf80}
              fill="var(--fill-0, #9E9E9E)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_549">
            <path d="M0 0H12V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-[43.27px] overflow-clip p-0 size-3 top-[3.5px]"
      data-name="Frame"
    >
      <Frame44 />
    </div>
  );
}

function Div34() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[382.91px] top-0.5 w-[39.094px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#9e9e9e] text-[12px] text-left top-0 w-10">
        <p className="block leading-[normal]">2h ago</p>
      </div>
    </div>
  );
}

function Div35() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-3 top-3 w-[422px]"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Div3 />
      <Div34 />
    </div>
  );
}

function H4() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-3 top-10 w-[422px]"
      data-name="h4"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-0.5 w-[417px]">
        <p className="block leading-[normal]">
          Character animation freezes during combat sequence
        </p>
      </div>
    </div>
  );
}

function Div145() {
  return (
    <div
      className="absolute bg-[#1e1e1e] h-[659px] left-[464px] rounded-lg top-0 w-[672px]"
      data-name="div"
    >
      <div className="h-[659px] overflow-clip relative w-[672px]">
        <Div3 />
        <Div14 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-gray-800 border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function Main() {
  return (
    <div
      className="absolute bg-[#121212] h-[1384px] left-0 top-14 w-[1184px]"
      data-name="main"
    >
      <div className="h-[1384px] overflow-clip relative w-[1184px]">
        <Div14 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#ced4da] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function Div148() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[1440px] left-64 top-0 w-[1184px]"
      data-name="div"
    >
      <div className="h-[1440px] overflow-clip relative w-[1184px]">
        <Header />
        <Main />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Div149() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 size-[1440px] top-0"
      data-name="div"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <Aside />
      <Div148 />
    </div>
  );
}

function Body() {
  return (
    <div
      className="bg-[#121212] relative shrink-0 size-[1440px]"
      data-name="body"
    >
      <div className="overflow-clip relative size-[1440px]">
        <Div149 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

export default function Frame77() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg size-full"
      data-name="Frame"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <Body />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#ced4da] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}
