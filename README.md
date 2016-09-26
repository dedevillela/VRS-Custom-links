# VRS-Custom-links
Custom links for Virtual Radar Server. This plug-in add new links to the Detail panel, that may help identify new aircraft or find pictures to the existing ones.

##Prerequisites
- VRS installed and running
- VRS Custom Content Plugin installed and enabled.

##Instructions
- Clone or download the repo into a directory on the machine where VRS is running. Ensure you do not place the files under the Virtual Radar Server directory, since they could be overwritten on upgrades.
- Configure the VRS Custom Content Plugin to add the "CustomLink.js" file into the END of HEAD portion of the pages, with an " * " (without quotes and spaces) on the Address field, so it will populate the links on all pages (including reports).
- Enjoy!
