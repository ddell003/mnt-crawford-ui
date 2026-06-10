import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordinances',
  templateUrl: './ordinances.component.html',
  styleUrls: ['./ordinances.component.css']
})
export class OrdinancesComponent implements OnInit {

  codes: {title: string, link: string}[] = [
    {
      title: 'Part 1 Admin of Government',
      link: 'https://drive.google.com/file/d/16i_Ocq14KuGzab3mGZWBnpkhuZkuVBFm/view?usp=sharing',
    },
    {
      title: 'Chapter 30 Businesses',
      link: 'https://drive.google.com/file/d/1wmdR9FqltjkRZ7q41Dj2-8--y79R-7Wp/view?usp=sharing',
    },
    {
      title: 'Chapter 35 Animals',
      link: 'https://drive.google.com/file/d/1nfK6D2yiIzg6dOV_NQpyPjgjKeM8O4wZ/view?usp=sharing',
    },
    {
      title: 'Business License',
      link: 'https://drive.google.com/file/d/1Dw9a8HOE7v4JksIvlWJROa722NvEBgLN/view?usp=sharing',
    },
    {
      title: 'Chapter 50 Taxation',
      link: 'https://drive.google.com/file/d/1RoylzjVUI29Aeg5h-2VPfGcqm34KSTSr/view?usp=sharing',
    },
    {
      title: 'Chapter 54 - Law Enforcement',
      link: 'https://drive.google.com/file/d/16i_Ocq14KuGzab3mGZWBnpkhuZkuVBFm/view?usp=sharing',
    },
    {
      title: 'Chapter 62 Planning',
      link: 'https://drive.google.com/file/d/166qQWYzrOZBG9Nf8bh1JQ8qKpK543KiI/view?usp=sharing',
    },
    {
      title: 'Chapter 170 Article 6 - Signs',
      link: 'https://drive.google.com/file/d/1bAQHY1lmFAwUlxNMkiRe-O5d-1Tn18_j/view?usp=sharing',
    },
    {
      title: 'Chapter 170 Article 12 - General Provisions',
      link: 'https://drive.google.com/file/d/1g07_l8iUQxSFtWMWelpoAAnpqasr9BI7/view?usp=sharing',
    },
    {
      title: 'Noise Ordinance',
      link: '../../assets/documents/NOISE-ORDINANCE-2019.pdf',
    },
    {
      title: 'Nuisance Ordinance',
      link: '../../assets/documents/Nuisance%20Ordinance.pdf',
    },
    {
      title: 'Subdivision Ordinance',
      link: '../../assets/documents/SUBDIVISION_ORDINANCE.pdf',
    },
    {
      title: 'Sewer and Water Service and rates Ordinance',
      link: '../../assets/documents/ORDINANCE_SEWER_WATER_SERVICE.pdf',
    },
    {
      title: 'Traffic',
      link: 'https://drive.google.com/file/d/1XSz7ExHEZ521Hk9cvaIm2UXDGywwnJFG/view?usp=sharing',
    },
    {
      title: 'Transient Tax Ordinance',
      link: 'https://drive.google.com/file/d/1atpgfogEmcmUB3i43OVOsNoJWKfnIV72/view?usp=sharingf',
    },
    {
      title: 'Transient Tax Form',
      link: 'https://drive.google.com/file/d/1yhp5vkiYmSYsm6GezLM5WCPeLCL41IhJ/view?usp=sharing',
    },
    {
      title: 'Trash Ordinance',
      link: '../../assets/documents/Trash%20Ordinance.pdf',
    },
    {
      title: 'Water System - Chapter 173',
      link: 'https://drive.google.com/file/d/1lw6gzBG4luX_0NqCRmh4nwkTvq8PPbb7/view?usp=sharing',
    },
    {
      title: 'Zoning - Chapter 170 ',
      link: 'https://drive.google.com/file/d/1WsHcyH_KkdzWmctHe2V2ekRm3b21dusE/view?usp=sharing',
    },
    {
      title: 'Zoning Article 7 - Administration and Enforcement ',
      link: 'https://drive.google.com/file/d/1hFECK_KXXSvbpgZVXDnqasq7l5OFsmep/view?usp=sharing',
    },
    {
      title: 'Zoning Fees',
      link: 'https://drive.google.com/file/d/1KcgypN_RcSzrKXjqMC-hYGh3HH3s9qlh/view?usp=sharing',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
