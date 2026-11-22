import React from 'react';

export function GoldDiamondRule({
  side = 'both',
  className = '',
  width = 80,
}: {
  side?: 'left' | 'right' | 'both';
  className?: string;
  width?: number;
}) {
  return (
    <svg
      width={width}
      height="12"
      viewBox="0 0 80 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <line x1="2" y1="6" x2="78" y2="6" stroke="#C8962E" strokeWidth="1.25" />
      {(side === 'left' || side === 'both') && (
        <path d="M2 6L6 3L10 6L6 9Z" fill="#C8962E" />
      )}
      {(side === 'right' || side === 'both') && (
        <path d="M70 6L74 3L78 6L74 9Z" fill="#C8962E" />
      )}
    </svg>
  );
}

export function LotusDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full max-w-[460px] mx-auto ${className}`}>
      <svg
        viewBox="0 0 460 30"
        fill="none"
        className="w-full h-auto"
        aria-hidden="true"
      >
        {/* Left & Right diamond-tipped lines */}
        <path d="M6 15L11 11.5L16 15L11 18.5Z" fill="#C8962E" />
        <line x1="14" y1="15" x2="196" y2="15" stroke="#C8962E" strokeWidth="1.2" />
        <line x1="264" y1="15" x2="446" y2="15" stroke="#C8962E" strokeWidth="1.2" />
        <path d="M444 15L449 11.5L454 15L449 18.5Z" fill="#C8962E" />

        {/* Central Lotus Blossom */}
        <path
          d="M230 3C226.5 9.5 225.5 16 230 22C234.5 16 233.5 9.5 230 3Z"
          stroke="#C8962E"
          strokeWidth="1.35"
          fill="#FDF4DE"
        />
        <path
          d="M229 21C222 17 217 12 217 7C222 9 226.5 14 229 21Z"
          stroke="#C8962E"
          strokeWidth="1.3"
          fill="#FDF4DE"
        />
        <path
          d="M231 21C238 17 243 12 243 7C238 9 233.5 14 231 21Z"
          stroke="#C8962E"
          strokeWidth="1.3"
          fill="#FDF4DE"
        />
        <path
          d="M227 22C217 21.5 210 17.5 208 13C214 13.5 220 17 227 22Z"
          stroke="#C8962E"
          strokeWidth="1.25"
          fill="#FDF4DE"
        />
        <path
          d="M233 22C243 21.5 250 17.5 252 13C246 13.5 240 17 233 22Z"
          stroke="#C8962E"
          strokeWidth="1.25"
          fill="#FDF4DE"
        />
        {/* Base calyx & swirls */}
        <path
          d="M222 23.5C226 25 234 25 238 23.5"
          stroke="#C8962E"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="204" cy="15" r="1.8" fill="#C8962E" />
        <circle cx="256" cy="15" r="1.8" fill="#C8962E" />
      </svg>
    </div>
  );
}

export function ScrollFlourishDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full max-w-[360px] mx-auto ${className}`}>
      <svg viewBox="0 0 360 28" fill="none" className="w-full h-auto" aria-hidden="true">
        <circle cx="8" cy="14" r="2.2" fill="#C8962E" />
        <line x1="10" y1="14" x2="142" y2="14" stroke="#C8962E" strokeWidth="1.2" />
        <line x1="218" y1="14" x2="350" y2="14" stroke="#C8962E" strokeWidth="1.2" />
        <circle cx="352" cy="14" r="2.2" fill="#C8962E" />

        {/* Decorative symmetrical curls */}
        <path
          d="M142 14C147 9 154 9 158 14C161 18 155 21 151 17"
          stroke="#C8962E"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M218 14C213 9 206 9 202 14C199 18 205 21 209 17"
          stroke="#C8962E"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        {/* Central lotus bud */}
        <path
          d="M180 4C177 9 177 15 180 20C183 15 183 9 180 4Z"
          stroke="#C8962E"
          strokeWidth="1.3"
          fill="#FDF4DE"
        />
        <path
          d="M179 19C173 16 170 11 171 8C175 10 178 14 179 19Z"
          stroke="#C8962E"
          strokeWidth="1.2"
          fill="#FDF4DE"
        />
        <path
          d="M181 19C187 16 190 11 189 8C185 10 182 14 181 19Z"
          stroke="#C8962E"
          strokeWidth="1.2"
          fill="#FDF4DE"
        />
        <path
          d="M167 16C172 19 177 20 180 20C183 20 188 19 193 16"
          stroke="#C8962E"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function SmallOrnamentLine({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full max-w-[240px] mx-auto ${className}`}>
      <svg viewBox="0 0 240 16" fill="none" className="w-full h-auto" aria-hidden="true">
        <circle cx="4" cy="8" r="1.8" fill="#C8962E" />
        <line x1="6" y1="8" x2="106" y2="8" stroke="#C8962E" strokeWidth="1.15" />
        <path d="M120 2L126 8L120 14L114 8Z" stroke="#C8962E" strokeWidth="1.15" fill="#FDF4DE" />
        <circle cx="120" cy="8" r="2.2" fill="#C8962E" />
        <path d="M108 8C111 5 114 5 114 8C114 11 111 11 108 8Z" fill="#C8962E" />
        <path d="M132 8C129 5 126 5 126 8C126 11 129 11 132 8Z" fill="#C8962E" />
        <line x1="134" y1="8" x2="234" y2="8" stroke="#C8962E" strokeWidth="1.15" />
        <circle cx="236" cy="8" r="1.8" fill="#C8962E" />
      </svg>
    </div>
  );
}

export function LeafFlourish({
  direction = 'left',
  className = '',
}: {
  direction?: 'left' | 'right';
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 16"
      fill="none"
      aria-hidden="true"
      className={`w-6 h-3.5 shrink-0 ${direction === 'right' ? 'scale-x-[-1]' : ''} ${className}`}
    >
      <path d="M2 8H18" stroke="#C8962E" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M18 8C21 4 26 4 29 8C26 12 21 12 18 8Z" stroke="#C8962E" strokeWidth="1.2" fill="#FDF4DE" />
      <path d="M16 8C18 3 22 1 25 3" stroke="#C8962E" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M16 8C18 13 22 15 25 13" stroke="#C8962E" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function ScallopedDateBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center justify-center px-8 sm:px-14 py-3.5 sm:py-4">
      <svg
        viewBox="0 0 420 74"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full drop-shadow-[0_1px_2px_rgba(186,138,44,0.12)]"
      >
        <path
          d="M28 4H392C396 14 405 18 416 20V54C405 56 396 60 392 70H28C24 60 15 56 4 54V20C15 18 24 14 28 4Z"
          fill="#FDF5E2"
          stroke="#C8962E"
          strokeWidth="1.6"
        />
        <path
          d="M32 9H388C391.5 16.5 399 20.5 409 22.5V51.5C399 53.5 391.5 57.5 388 65H32C28.5 57.5 21 53.5 11 51.5V22.5C21 20.5 28.5 16.5 32 9Z"
          stroke="#DFB868"
          strokeWidth="0.9"
          strokeOpacity="0.7"
        />
      </svg>
      <div className="relative z-10 flex items-center gap-3 sm:gap-5 text-[#6B0F0D] font-serif-inv text-base sm:text-xl font-medium tracking-wide">
        <span className="inline-block w-5 sm:w-8 h-[1px] bg-[#C8962E]" />
        <span>{children}</span>
        <span className="inline-block w-5 sm:w-8 h-[1px] bg-[#C8962E]" />
      </div>
    </div>
  );
}

export function CountdownBox({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full aspect-[154/188] px-2 pt-3 pb-4">
      <svg
        viewBox="0 0 154 188"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full drop-shadow-[0_2px_6px_rgba(180,132,42,0.1)]"
      >
        <path
          d="M77 4C87 12 100 18 118 20C125 27 137 32 148 35V153C137 156 125 161 118 168C100 170 87 176 77 184C67 176 54 170 36 168C29 161 17 156 6 153V35C17 32 29 27 36 20C54 18 67 12 77 4Z"
          fill="#FCF3DC"
          stroke="#D3A23B"
          strokeWidth="1.6"
        />
        <path
          d="M77 10C86 17 98 22 115 24C121 30.5 132 35 142 38V150C132 153 121 157.5 115 164C98 166 86 171 77 178C68 171 56 166 39 164C33 157.5 22 153 12 150V38C22 35 33 30.5 39 24C56 22 68 17 77 10Z"
          stroke="#E3BF6E"
          strokeWidth="0.9"
          strokeOpacity="0.65"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-1">
        <span className="font-serif-inv text-3xl sm:text-[42px] md:text-[46px] font-semibold leading-none tracking-tight text-[#6B0F0D] tabular-nums">
          {value}
        </span>
        <span className="font-serif-inv text-[10px] sm:text-xs tracking-[0.18em] text-[#7D1B17] mt-1.5 font-medium">
          {label}
        </span>
        {/* Small bottom lotus ornament inside frame */}
        <svg viewBox="0 0 80 18" fill="none" className="w-12 sm:w-16 h-3.5 mt-2" aria-hidden="true">
          <line x1="2" y1="10" x2="27" y2="10" stroke="#C8962E" strokeWidth="1" />
          <line x1="53" y1="10" x2="78" y2="10" stroke="#C8962E" strokeWidth="1" />
          <path d="M40 2C38 6 38 11 40 15C42 11 42 6 40 2Z" stroke="#C8962E" strokeWidth="1.1" fill="#FCF3DC" />
          <path d="M39.5 14C34.5 11.5 32 8 32 5C35.5 6.5 38 10 39.5 14Z" stroke="#C8962E" strokeWidth="1.05" fill="#FCF3DC" />
          <path d="M40.5 14C45.5 11.5 48 8 48 5C44.5 6.5 42 10 40.5 14Z" stroke="#C8962E" strokeWidth="1.05" fill="#FCF3DC" />
          <path d="M38 14.5C32 14.5 28 12 27 9C31 9.5 34.5 11.5 38 14.5Z" stroke="#C8962E" strokeWidth="1" fill="#FCF3DC" />
          <path d="M42 14.5C48 14.5 52 12 53 9C49 9.5 45.5 11.5 42 14.5Z" stroke="#C8962E" strokeWidth="1" fill="#FCF3DC" />
        </svg>
      </div>
    </div>
  );
}

export function JasmineDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full max-w-[360px] mx-auto ${className}`}>
      <img
        src="/assets/wedding/jasmine-divider.png"
        alt=""
        aria-hidden="true"
        className="w-60 sm:w-72 h-auto object-contain select-none pointer-events-none"
      />
    </div>
  );
}
