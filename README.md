<h1 align="center">
  VRS-Custom-links 🛩️ 
</h1>

<p align="center">
  <a href="https://saythanks.io/to/amitmerchant1990">
      <img src="https://img.shields.io/badge/License-MIT-red.svg">
  </a>
  <a href="http://virtualradarserver.co.uk/Download.aspx">
      <img src="https://img.shields.io/badge/VRS-v2.4-blue.svg">
  </a>
  <a href="https://travis-ci.org/dedevillela/VRS-Custom-links">
      <img src="https://travis-ci.org/dedevillela/VRS-Custom-links.svg?branch=master">
  </a>
  <a href="https://github.com/dedevillela/VRS-Custom-links/releases">
      <img src="https://img.shields.io/github/release/dedevillela/VRS-Custom-links.svg">
  </a>
  <a href="#">
		<img src="https://views.whatilearened.today/views/github/dedevillela/VRS-Custom-links.svg">
	</a>
  <a href="https://saythanks.io/to/dedevillela">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
</p>

Custom links for [Virtual Radar Server](https://www.virtualradarserver.co.uk "Virtual Radar Server's Homepage") (a.k.a. VRS). This plug-in add new links to the Detail panel, that may help identify new aircraft or find pictures to the existing ones.

<h2>
  Prerequisites
</h2>

- VRS installed and running
- VRS Custom Content Plugin installed and enabled.

<h2>
  Instructions
</h2>

- Clone or download the repo into a directory on the machine where VRS is running. Ensure you do not place the files under the Virtual Radar Server directory, since they could be overwritten on upgrades.
- Open a text editor and modify the file "CustomLink.js" so that the first line of code begins with <script> and the last line ends with </script>, and save the file.
- Configure the VRS Custom Content Plugin to add the "CustomLink.js" file into the END of HEAD portion of the pages, with an " * " (without quotes and spaces) on the Address field, so it will populate the links on all pages (including reports).
- Enjoy!

<h2>
  Acknowledgments
</h2>

This project was only possible thanks to the invaluable help of many individuals and communities, especially the creator of the VRS, Andrew Whewell, always solicitous in [![his forum](https://img.shields.io/badge/VRS-Forum-blue.svg)](https://forum.virtualradarserver.co.uk/); Andrew Hill, whose [![flights.hillhome.org](https://img.shields.io/badge/flights-hillhome.org-ADD6FF.svg)](http://flights.hillhome.org/) site inspired me deeply; and all of the [![ADS-B Brasil](https://img.shields.io/badge/ADS--B-Brasil-lightgrey.svg)](http://bradsb.com/forum/index.php) community, including Ramon Martins and Jaime Hempke, which together maintain the excellent site [![TrafegoAereo.com](https://img.shields.io/badge/Trafego-Aereo-yellowgreen.svg)](http://trafegoaereo.com/).

<h2>
  Contributions
</h2>

Feel free to download and share these files, suggest corrections, or send requests for more aviation links, as I'm constantly updating this repository with new usefull resources.

<h2>
  Other Projects
</h2>

[![VRS Operator Flags](https://img.shields.io/badge/VRS-Operator_Flags-red.svg)](https://github.com/dedevillela/VRS-Operator-Flags)

[![VRS Aircraft Markers](https://img.shields.io/badge/VRS-Aircraft_Markers-orange.svg)](https://github.com/dedevillela/VRS-Aircraft-Markers)

[![VRS Country Flags](https://img.shields.io/badge/VRS-Country_Flags-green.svg)](https://github.com/dedevillela/VRS-Country-Flags)

[![VRS Silhouettes](https://img.shields.io/badge/VRS-Silhouettes-brightgreen.svg)](https://github.com/dedevillela/VRS-Silhouettes)
