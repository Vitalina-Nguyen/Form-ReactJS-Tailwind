import React from "react";
import style from "./InfoBtnRegion.module.scss";

export default function InfoBtnRegion() {
    return (
        <span className={`group ${style.regionInfoBtn}`}>
            <svg className="group-hover:fill-orange" width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="group-hover:stroke-none" cx="7" cy="7" r="6" stroke="#636670" />
                <g clipPath="url(#clip0_1_454)">
                    <path className="group-hover:fill-white" d="M8.27605 9.41441L8.19001 9.76613C7.93189 9.86801 7.7257 9.94555 7.57216 9.99886C7.41846 10.0523 7.23987 10.0789 7.03638 10.0789C6.7239 10.0789 6.48084 10.0024 6.30749 9.85035C6.13414 9.69769 6.04744 9.50426 6.04744 9.26959C6.04744 9.17875 6.05373 9.08531 6.06681 8.99011C6.08 8.8948 6.10097 8.78745 6.12967 8.66747L6.45226 7.52571C6.48095 7.41638 6.50535 7.31279 6.52489 7.21482C6.5447 7.11747 6.55425 7.0279 6.55425 6.94726C6.55425 6.80145 6.52406 6.69946 6.46396 6.64212C6.40385 6.58494 6.28917 6.55591 6.11891 6.55591C6.03552 6.55591 5.94981 6.56927 5.86244 6.5951C5.77469 6.62104 5.69969 6.64609 5.63672 6.66938L5.72298 6.31738C5.9343 6.23134 6.1363 6.15767 6.32951 6.09652C6.52273 6.0352 6.7053 6.00451 6.87799 6.00451C7.18832 6.00451 7.42779 6.07952 7.59595 6.22952C7.76411 6.37964 7.84817 6.57424 7.84817 6.81404C7.84817 6.86365 7.84265 6.95107 7.83078 7.07602C7.81919 7.20125 7.79761 7.31599 7.76616 7.42035L7.44495 8.55753C7.41863 8.64887 7.39495 8.75329 7.37436 8.87079C7.35312 8.98751 7.34296 9.0767 7.34296 9.13653C7.34296 9.28753 7.37663 9.39062 7.44412 9.44542C7.51212 9.50023 7.62923 9.52749 7.79557 9.52749C7.87367 9.52749 7.96252 9.51364 8.06126 9.48643C8.15971 9.45922 8.23152 9.43532 8.27605 9.41441ZM8.35751 4.64017C8.35751 4.8383 8.28284 5.00751 8.13278 5.14665C7.98311 5.28628 7.80275 5.35615 7.59176 5.35615C7.3801 5.35615 7.1993 5.28628 7.04792 5.14665C6.89681 5.00746 6.82109 4.8383 6.82109 4.64017C6.82109 4.44243 6.89681 4.27294 7.04792 4.13204C7.19903 3.99136 7.38016 3.92105 7.59176 3.92105C7.80269 3.92105 7.98311 3.99153 8.13278 4.13204C8.28295 4.27294 8.35751 4.44248 8.35751 4.64017Z" fill="#636670" />
                </g>
                <defs>
                    <clipPath id="clip0_1_454">
                        <rect width="6.15789" height="6.15789" fill="white" transform="translate(3.91797 3.92105)" />
                    </clipPath>
                </defs>
            </svg>
            <div className={`group-hover:block ${style.regionsInfoMassage_wrapper}`}>
                <div className={style.regionsInfoMassage}>
                    APAC ??? Asia Pacific;
                    <React.Fragment><br /></React.Fragment>
                    NA ??? North America;
                    <React.Fragment><br /></React.Fragment>
                    EMEA ??? Europe, the Middle East{" "}
                    <React.Fragment><br /></React.Fragment>
                    and Africa.
                </div>
            </div>
        </span>
    );

}