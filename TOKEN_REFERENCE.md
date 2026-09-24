# Token Reference

Generated from `tokens/*.json` by `npm run build` (`scripts/build-token-reference.ts`).
Do not hand-edit — regenerate instead. This file is a derived artifact, not
contract authority; `tokens/` and `contract.manifest.json` remain the source
of truth (see `TOKEN_CONTRACT.md`).

Every leaf token path across all 23 public namespaces
(2167 total), with its resolved source value and a usage note.
Values shown here are pre-CSS-resolution source values — `{path.to.token}`
references are shown as-written, not resolved (see `src/css.ts` for
resolved CSS output).

## colors

| Path | Value | Usage |
| ---- | ----- | ----- |
| `colors.brand.50` | `#eef4ff` | colors token. |
| `colors.brand.100` | `#d9e7ff` | colors token. |
| `colors.brand.200` | `#b9d2ff` | colors token. |
| `colors.brand.300` | `#8ab6ff` | colors token. |
| `colors.brand.400` | `#5a92ff` | colors token. |
| `colors.brand.500` | `#336df4` | colors token. |
| `colors.brand.600` | `#1f57db` | colors token. |
| `colors.brand.700` | `#1946b4` | colors token. |
| `colors.brand.800` | `#173b8f` | colors token. |
| `colors.brand.900` | `#16336f` | colors token. |
| `colors.neutral.50` | `#f7f8fb` | colors token. |
| `colors.neutral.100` | `#eef1f6` | colors token. |
| `colors.neutral.200` | `#d9dfeb` | colors token. |
| `colors.neutral.300` | `#b7c1d4` | colors token. |
| `colors.neutral.400` | `#8a96ad` | colors token. |
| `colors.neutral.500` | `#657287` | colors token. |
| `colors.neutral.600` | `#4b576a` | colors token. |
| `colors.neutral.700` | `#374253` | colors token. |
| `colors.neutral.800` | `#222b38` | colors token. |
| `colors.neutral.900` | `#141b24` | colors token. |
| `colors.accent.50` | `#f6f2ff` | colors token. |
| `colors.accent.100` | `#eee5ff` | colors token. |
| `colors.accent.200` | `#ddccff` | colors token. |
| `colors.accent.300` | `#c3a7ff` | colors token. |
| `colors.accent.400` | `#a279ff` | colors token. |
| `colors.accent.500` | `#854ff7` | colors token. |
| `colors.accent.600` | `#7135dd` | colors token. |
| `colors.accent.700` | `#5d28b8` | colors token. |
| `colors.accent.800` | `#4d2393` | colors token. |
| `colors.accent.900` | `#401f75` | colors token. |
| `colors.success.50` | `#f0fdf4` | colors token. |
| `colors.success.100` | `#dcfce7` | colors token. |
| `colors.success.200` | `#bbf7d0` | colors token. |
| `colors.success.300` | `#86efac` | colors token. |
| `colors.success.400` | `#4ade80` | colors token. |
| `colors.success.500` | `#22c55e` | colors token. |
| `colors.success.600` | `#16a34a` | colors token. |
| `colors.success.700` | `#15803d` | colors token. |
| `colors.success.800` | `#166534` | colors token. |
| `colors.success.900` | `#14532d` | colors token. |
| `colors.warning.50` | `#fffbea` | colors token. |
| `colors.warning.100` | `#fff1c2` | colors token. |
| `colors.warning.200` | `#ffe08a` | colors token. |
| `colors.warning.300` | `#ffd24d` | colors token. |
| `colors.warning.400` | `#ffc21a` | colors token. |
| `colors.warning.500` | `#f5ad00` | colors token. |
| `colors.warning.600` | `#d48806` | colors token. |
| `colors.warning.700` | `#ad6800` | colors token. |
| `colors.warning.800` | `#8f5200` | colors token. |
| `colors.warning.900` | `#734000` | colors token. |
| `colors.error.50` | `#fef2f2` | colors token. |
| `colors.error.100` | `#fee2e2` | colors token. |
| `colors.error.200` | `#fecaca` | colors token. |
| `colors.error.300` | `#fca5a5` | colors token. |
| `colors.error.400` | `#f87171` | colors token. |
| `colors.error.500` | `#ef4444` | colors token. |
| `colors.error.600` | `#dc2626` | colors token. |
| `colors.error.700` | `#b91c1c` | colors token. |
| `colors.error.800` | `#991b1b` | colors token. |
| `colors.error.900` | `#7f1d1d` | colors token. |
| `colors.info.50` | `#f0f9ff` | colors token. |
| `colors.info.100` | `#e0f2fe` | colors token. |
| `colors.info.200` | `#bae6fd` | colors token. |
| `colors.info.300` | `#7dd3fc` | colors token. |
| `colors.info.400` | `#38bdf8` | colors token. |
| `colors.info.500` | `#0ea5e9` | colors token. |
| `colors.info.600` | `#0369a1` | colors token. |
| `colors.info.700` | `#075985` | colors token. |
| `colors.info.800` | `#0c4a6e` | colors token. |
| `colors.info.900` | `#082f49` | colors token. |
| `colors.indigo.500` | `#5b6ee1` | colors token. |
| `colors.indigo.600` | `#4d61db` | colors token. |
| `colors.violet.600` | `#6f3fd7` | colors token. |
| `colors.focus.primary` | `{colors.brand.500}` | colors token. |
| `colors.focus.error` | `{colors.error.500}` | colors token. |
| `colors.focus.info` | `{colors.info.600}` | colors token. |
| `colors.white` | `#ffffff` | colors token. |
| `colors.black` | `#000000` | colors token. |
| `colors.palette.red.50` | `#fef2f2` | Raw palette color — hue `red`, step `50`. |
| `colors.palette.red.100` | `#ffe2e2` | Raw palette color — hue `red`, step `100`. |
| `colors.palette.red.200` | `#ffc9c9` | Raw palette color — hue `red`, step `200`. |
| `colors.palette.red.300` | `#ffa2a2` | Raw palette color — hue `red`, step `300`. |
| `colors.palette.red.400` | `#ff6467` | Raw palette color — hue `red`, step `400`. |
| `colors.palette.red.500` | `#fb2c36` | Raw palette color — hue `red`, step `500`. |
| `colors.palette.red.600` | `#e7000b` | Raw palette color — hue `red`, step `600`. |
| `colors.palette.red.700` | `#c10007` | Raw palette color — hue `red`, step `700`. |
| `colors.palette.red.800` | `#9f0712` | Raw palette color — hue `red`, step `800`. |
| `colors.palette.red.900` | `#82181a` | Raw palette color — hue `red`, step `900`. |
| `colors.palette.red.950` | `#460809` | Raw palette color — hue `red`, step `950`. |
| `colors.palette.orange.50` | `#fff7ed` | Raw palette color — hue `orange`, step `50`. |
| `colors.palette.orange.100` | `#ffedd4` | Raw palette color — hue `orange`, step `100`. |
| `colors.palette.orange.200` | `#ffd6a7` | Raw palette color — hue `orange`, step `200`. |
| `colors.palette.orange.300` | `#ffb86a` | Raw palette color — hue `orange`, step `300`. |
| `colors.palette.orange.400` | `#ff8904` | Raw palette color — hue `orange`, step `400`. |
| `colors.palette.orange.500` | `#ff6900` | Raw palette color — hue `orange`, step `500`. |
| `colors.palette.orange.600` | `#f54900` | Raw palette color — hue `orange`, step `600`. |
| `colors.palette.orange.700` | `#ca3500` | Raw palette color — hue `orange`, step `700`. |
| `colors.palette.orange.800` | `#9f2d00` | Raw palette color — hue `orange`, step `800`. |
| `colors.palette.orange.900` | `#7e2a0c` | Raw palette color — hue `orange`, step `900`. |
| `colors.palette.orange.950` | `#441306` | Raw palette color — hue `orange`, step `950`. |
| `colors.palette.amber.50` | `#fffbeb` | Raw palette color — hue `amber`, step `50`. |
| `colors.palette.amber.100` | `#fef3c6` | Raw palette color — hue `amber`, step `100`. |
| `colors.palette.amber.200` | `#fee685` | Raw palette color — hue `amber`, step `200`. |
| `colors.palette.amber.300` | `#ffd230` | Raw palette color — hue `amber`, step `300`. |
| `colors.palette.amber.400` | `#ffb900` | Raw palette color — hue `amber`, step `400`. |
| `colors.palette.amber.500` | `#fe9a00` | Raw palette color — hue `amber`, step `500`. |
| `colors.palette.amber.600` | `#e17100` | Raw palette color — hue `amber`, step `600`. |
| `colors.palette.amber.700` | `#bb4d00` | Raw palette color — hue `amber`, step `700`. |
| `colors.palette.amber.800` | `#973c00` | Raw palette color — hue `amber`, step `800`. |
| `colors.palette.amber.900` | `#7b3306` | Raw palette color — hue `amber`, step `900`. |
| `colors.palette.amber.950` | `#461901` | Raw palette color — hue `amber`, step `950`. |
| `colors.palette.yellow.50` | `#fefce8` | Raw palette color — hue `yellow`, step `50`. |
| `colors.palette.yellow.100` | `#fef9c2` | Raw palette color — hue `yellow`, step `100`. |
| `colors.palette.yellow.200` | `#fff085` | Raw palette color — hue `yellow`, step `200`. |
| `colors.palette.yellow.300` | `#ffdf20` | Raw palette color — hue `yellow`, step `300`. |
| `colors.palette.yellow.400` | `#fdc700` | Raw palette color — hue `yellow`, step `400`. |
| `colors.palette.yellow.500` | `#f0b100` | Raw palette color — hue `yellow`, step `500`. |
| `colors.palette.yellow.600` | `#d08700` | Raw palette color — hue `yellow`, step `600`. |
| `colors.palette.yellow.700` | `#a65f00` | Raw palette color — hue `yellow`, step `700`. |
| `colors.palette.yellow.800` | `#894b00` | Raw palette color — hue `yellow`, step `800`. |
| `colors.palette.yellow.900` | `#733e0a` | Raw palette color — hue `yellow`, step `900`. |
| `colors.palette.yellow.950` | `#432004` | Raw palette color — hue `yellow`, step `950`. |
| `colors.palette.lime.50` | `#f7fee7` | Raw palette color — hue `lime`, step `50`. |
| `colors.palette.lime.100` | `#ecfcca` | Raw palette color — hue `lime`, step `100`. |
| `colors.palette.lime.200` | `#d8f999` | Raw palette color — hue `lime`, step `200`. |
| `colors.palette.lime.300` | `#bbf451` | Raw palette color — hue `lime`, step `300`. |
| `colors.palette.lime.400` | `#9ae600` | Raw palette color — hue `lime`, step `400`. |
| `colors.palette.lime.500` | `#7ccf00` | Raw palette color — hue `lime`, step `500`. |
| `colors.palette.lime.600` | `#5ea500` | Raw palette color — hue `lime`, step `600`. |
| `colors.palette.lime.700` | `#497d00` | Raw palette color — hue `lime`, step `700`. |
| `colors.palette.lime.800` | `#3c6300` | Raw palette color — hue `lime`, step `800`. |
| `colors.palette.lime.900` | `#35530e` | Raw palette color — hue `lime`, step `900`. |
| `colors.palette.lime.950` | `#192e03` | Raw palette color — hue `lime`, step `950`. |
| `colors.palette.green.50` | `#f0fdf4` | Raw palette color — hue `green`, step `50`. |
| `colors.palette.green.100` | `#dcfce7` | Raw palette color — hue `green`, step `100`. |
| `colors.palette.green.200` | `#b9f8cf` | Raw palette color — hue `green`, step `200`. |
| `colors.palette.green.300` | `#7bf1a8` | Raw palette color — hue `green`, step `300`. |
| `colors.palette.green.400` | `#05df72` | Raw palette color — hue `green`, step `400`. |
| `colors.palette.green.500` | `#00c950` | Raw palette color — hue `green`, step `500`. |
| `colors.palette.green.600` | `#00a63e` | Raw palette color — hue `green`, step `600`. |
| `colors.palette.green.700` | `#008236` | Raw palette color — hue `green`, step `700`. |
| `colors.palette.green.800` | `#016630` | Raw palette color — hue `green`, step `800`. |
| `colors.palette.green.900` | `#0d542b` | Raw palette color — hue `green`, step `900`. |
| `colors.palette.green.950` | `#032e15` | Raw palette color — hue `green`, step `950`. |
| `colors.palette.emerald.50` | `#ecfdf5` | Raw palette color — hue `emerald`, step `50`. |
| `colors.palette.emerald.100` | `#d0fae5` | Raw palette color — hue `emerald`, step `100`. |
| `colors.palette.emerald.200` | `#a4f4cf` | Raw palette color — hue `emerald`, step `200`. |
| `colors.palette.emerald.300` | `#5ee9b5` | Raw palette color — hue `emerald`, step `300`. |
| `colors.palette.emerald.400` | `#00d492` | Raw palette color — hue `emerald`, step `400`. |
| `colors.palette.emerald.500` | `#00bc7d` | Raw palette color — hue `emerald`, step `500`. |
| `colors.palette.emerald.600` | `#009966` | Raw palette color — hue `emerald`, step `600`. |
| `colors.palette.emerald.700` | `#007a55` | Raw palette color — hue `emerald`, step `700`. |
| `colors.palette.emerald.800` | `#006045` | Raw palette color — hue `emerald`, step `800`. |
| `colors.palette.emerald.900` | `#004f3b` | Raw palette color — hue `emerald`, step `900`. |
| `colors.palette.emerald.950` | `#002c22` | Raw palette color — hue `emerald`, step `950`. |
| `colors.palette.teal.50` | `#f0fdfa` | Raw palette color — hue `teal`, step `50`. |
| `colors.palette.teal.100` | `#cbfbf1` | Raw palette color — hue `teal`, step `100`. |
| `colors.palette.teal.200` | `#96f7e4` | Raw palette color — hue `teal`, step `200`. |
| `colors.palette.teal.300` | `#46ecd5` | Raw palette color — hue `teal`, step `300`. |
| `colors.palette.teal.400` | `#00d5be` | Raw palette color — hue `teal`, step `400`. |
| `colors.palette.teal.500` | `#00bba7` | Raw palette color — hue `teal`, step `500`. |
| `colors.palette.teal.600` | `#009689` | Raw palette color — hue `teal`, step `600`. |
| `colors.palette.teal.700` | `#00786f` | Raw palette color — hue `teal`, step `700`. |
| `colors.palette.teal.800` | `#005f5a` | Raw palette color — hue `teal`, step `800`. |
| `colors.palette.teal.900` | `#0b4f4a` | Raw palette color — hue `teal`, step `900`. |
| `colors.palette.teal.950` | `#022f2e` | Raw palette color — hue `teal`, step `950`. |
| `colors.palette.cyan.50` | `#ecfeff` | Raw palette color — hue `cyan`, step `50`. |
| `colors.palette.cyan.100` | `#cefafe` | Raw palette color — hue `cyan`, step `100`. |
| `colors.palette.cyan.200` | `#a2f4fd` | Raw palette color — hue `cyan`, step `200`. |
| `colors.palette.cyan.300` | `#53eafd` | Raw palette color — hue `cyan`, step `300`. |
| `colors.palette.cyan.400` | `#00d3f2` | Raw palette color — hue `cyan`, step `400`. |
| `colors.palette.cyan.500` | `#00b8db` | Raw palette color — hue `cyan`, step `500`. |
| `colors.palette.cyan.600` | `#0092b8` | Raw palette color — hue `cyan`, step `600`. |
| `colors.palette.cyan.700` | `#007595` | Raw palette color — hue `cyan`, step `700`. |
| `colors.palette.cyan.800` | `#005f78` | Raw palette color — hue `cyan`, step `800`. |
| `colors.palette.cyan.900` | `#104e64` | Raw palette color — hue `cyan`, step `900`. |
| `colors.palette.cyan.950` | `#053345` | Raw palette color — hue `cyan`, step `950`. |
| `colors.palette.sky.50` | `#f0f9ff` | Raw palette color — hue `sky`, step `50`. |
| `colors.palette.sky.100` | `#dff2fe` | Raw palette color — hue `sky`, step `100`. |
| `colors.palette.sky.200` | `#b8e6fe` | Raw palette color — hue `sky`, step `200`. |
| `colors.palette.sky.300` | `#74d4ff` | Raw palette color — hue `sky`, step `300`. |
| `colors.palette.sky.400` | `#00bcff` | Raw palette color — hue `sky`, step `400`. |
| `colors.palette.sky.500` | `#00a6f4` | Raw palette color — hue `sky`, step `500`. |
| `colors.palette.sky.600` | `#0084d1` | Raw palette color — hue `sky`, step `600`. |
| `colors.palette.sky.700` | `#0069a8` | Raw palette color — hue `sky`, step `700`. |
| `colors.palette.sky.800` | `#00598a` | Raw palette color — hue `sky`, step `800`. |
| `colors.palette.sky.900` | `#024a70` | Raw palette color — hue `sky`, step `900`. |
| `colors.palette.sky.950` | `#052f4a` | Raw palette color — hue `sky`, step `950`. |
| `colors.palette.blue.50` | `#eff6ff` | Raw palette color — hue `blue`, step `50`. |
| `colors.palette.blue.100` | `#dbeafe` | Raw palette color — hue `blue`, step `100`. |
| `colors.palette.blue.200` | `#bedbff` | Raw palette color — hue `blue`, step `200`. |
| `colors.palette.blue.300` | `#8ec5ff` | Raw palette color — hue `blue`, step `300`. |
| `colors.palette.blue.400` | `#51a2ff` | Raw palette color — hue `blue`, step `400`. |
| `colors.palette.blue.500` | `#2b7fff` | Raw palette color — hue `blue`, step `500`. |
| `colors.palette.blue.600` | `#155dfc` | Raw palette color — hue `blue`, step `600`. |
| `colors.palette.blue.700` | `#1447e6` | Raw palette color — hue `blue`, step `700`. |
| `colors.palette.blue.800` | `#193cb8` | Raw palette color — hue `blue`, step `800`. |
| `colors.palette.blue.900` | `#1c398e` | Raw palette color — hue `blue`, step `900`. |
| `colors.palette.blue.950` | `#162456` | Raw palette color — hue `blue`, step `950`. |
| `colors.palette.indigo.50` | `#eef2ff` | Raw palette color — hue `indigo`, step `50`. |
| `colors.palette.indigo.100` | `#e0e7ff` | Raw palette color — hue `indigo`, step `100`. |
| `colors.palette.indigo.200` | `#c6d2ff` | Raw palette color — hue `indigo`, step `200`. |
| `colors.palette.indigo.300` | `#a3b3ff` | Raw palette color — hue `indigo`, step `300`. |
| `colors.palette.indigo.400` | `#7c86ff` | Raw palette color — hue `indigo`, step `400`. |
| `colors.palette.indigo.500` | `#615fff` | Raw palette color — hue `indigo`, step `500`. |
| `colors.palette.indigo.600` | `#4f39f6` | Raw palette color — hue `indigo`, step `600`. |
| `colors.palette.indigo.700` | `#432dd7` | Raw palette color — hue `indigo`, step `700`. |
| `colors.palette.indigo.800` | `#372aac` | Raw palette color — hue `indigo`, step `800`. |
| `colors.palette.indigo.900` | `#312c85` | Raw palette color — hue `indigo`, step `900`. |
| `colors.palette.indigo.950` | `#1e1a4d` | Raw palette color — hue `indigo`, step `950`. |
| `colors.palette.violet.50` | `#f5f3ff` | Raw palette color — hue `violet`, step `50`. |
| `colors.palette.violet.100` | `#ede9fe` | Raw palette color — hue `violet`, step `100`. |
| `colors.palette.violet.200` | `#ddd6ff` | Raw palette color — hue `violet`, step `200`. |
| `colors.palette.violet.300` | `#c4b4ff` | Raw palette color — hue `violet`, step `300`. |
| `colors.palette.violet.400` | `#a684ff` | Raw palette color — hue `violet`, step `400`. |
| `colors.palette.violet.500` | `#8e51ff` | Raw palette color — hue `violet`, step `500`. |
| `colors.palette.violet.600` | `#7f22fe` | Raw palette color — hue `violet`, step `600`. |
| `colors.palette.violet.700` | `#7008e7` | Raw palette color — hue `violet`, step `700`. |
| `colors.palette.violet.800` | `#5d0ec0` | Raw palette color — hue `violet`, step `800`. |
| `colors.palette.violet.900` | `#4d179a` | Raw palette color — hue `violet`, step `900`. |
| `colors.palette.violet.950` | `#2f0d68` | Raw palette color — hue `violet`, step `950`. |
| `colors.palette.purple.50` | `#faf5ff` | Raw palette color — hue `purple`, step `50`. |
| `colors.palette.purple.100` | `#f3e8ff` | Raw palette color — hue `purple`, step `100`. |
| `colors.palette.purple.200` | `#e9d4ff` | Raw palette color — hue `purple`, step `200`. |
| `colors.palette.purple.300` | `#dab2ff` | Raw palette color — hue `purple`, step `300`. |
| `colors.palette.purple.400` | `#c27aff` | Raw palette color — hue `purple`, step `400`. |
| `colors.palette.purple.500` | `#ad46ff` | Raw palette color — hue `purple`, step `500`. |
| `colors.palette.purple.600` | `#9810fa` | Raw palette color — hue `purple`, step `600`. |
| `colors.palette.purple.700` | `#8200db` | Raw palette color — hue `purple`, step `700`. |
| `colors.palette.purple.800` | `#6e11b0` | Raw palette color — hue `purple`, step `800`. |
| `colors.palette.purple.900` | `#59168b` | Raw palette color — hue `purple`, step `900`. |
| `colors.palette.purple.950` | `#3c0366` | Raw palette color — hue `purple`, step `950`. |
| `colors.palette.fuchsia.50` | `#fdf4ff` | Raw palette color — hue `fuchsia`, step `50`. |
| `colors.palette.fuchsia.100` | `#fae8ff` | Raw palette color — hue `fuchsia`, step `100`. |
| `colors.palette.fuchsia.200` | `#f6cfff` | Raw palette color — hue `fuchsia`, step `200`. |
| `colors.palette.fuchsia.300` | `#f4a8ff` | Raw palette color — hue `fuchsia`, step `300`. |
| `colors.palette.fuchsia.400` | `#ed6aff` | Raw palette color — hue `fuchsia`, step `400`. |
| `colors.palette.fuchsia.500` | `#e12afb` | Raw palette color — hue `fuchsia`, step `500`. |
| `colors.palette.fuchsia.600` | `#c800de` | Raw palette color — hue `fuchsia`, step `600`. |
| `colors.palette.fuchsia.700` | `#a800b7` | Raw palette color — hue `fuchsia`, step `700`. |
| `colors.palette.fuchsia.800` | `#8a0194` | Raw palette color — hue `fuchsia`, step `800`. |
| `colors.palette.fuchsia.900` | `#721378` | Raw palette color — hue `fuchsia`, step `900`. |
| `colors.palette.fuchsia.950` | `#4b004f` | Raw palette color — hue `fuchsia`, step `950`. |
| `colors.palette.pink.50` | `#fdf2f8` | Raw palette color — hue `pink`, step `50`. |
| `colors.palette.pink.100` | `#fce7f3` | Raw palette color — hue `pink`, step `100`. |
| `colors.palette.pink.200` | `#fccee8` | Raw palette color — hue `pink`, step `200`. |
| `colors.palette.pink.300` | `#fda5d5` | Raw palette color — hue `pink`, step `300`. |
| `colors.palette.pink.400` | `#fb64b6` | Raw palette color — hue `pink`, step `400`. |
| `colors.palette.pink.500` | `#f6339a` | Raw palette color — hue `pink`, step `500`. |
| `colors.palette.pink.600` | `#e60076` | Raw palette color — hue `pink`, step `600`. |
| `colors.palette.pink.700` | `#c6005c` | Raw palette color — hue `pink`, step `700`. |
| `colors.palette.pink.800` | `#a3004c` | Raw palette color — hue `pink`, step `800`. |
| `colors.palette.pink.900` | `#861043` | Raw palette color — hue `pink`, step `900`. |
| `colors.palette.pink.950` | `#510424` | Raw palette color — hue `pink`, step `950`. |
| `colors.palette.rose.50` | `#fff1f2` | Raw palette color — hue `rose`, step `50`. |
| `colors.palette.rose.100` | `#ffe4e6` | Raw palette color — hue `rose`, step `100`. |
| `colors.palette.rose.200` | `#ffccd3` | Raw palette color — hue `rose`, step `200`. |
| `colors.palette.rose.300` | `#ffa1ad` | Raw palette color — hue `rose`, step `300`. |
| `colors.palette.rose.400` | `#ff637e` | Raw palette color — hue `rose`, step `400`. |
| `colors.palette.rose.500` | `#ff2056` | Raw palette color — hue `rose`, step `500`. |
| `colors.palette.rose.600` | `#ec003f` | Raw palette color — hue `rose`, step `600`. |
| `colors.palette.rose.700` | `#c70036` | Raw palette color — hue `rose`, step `700`. |
| `colors.palette.rose.800` | `#a50036` | Raw palette color — hue `rose`, step `800`. |
| `colors.palette.rose.900` | `#8b0836` | Raw palette color — hue `rose`, step `900`. |
| `colors.palette.rose.950` | `#4d0218` | Raw palette color — hue `rose`, step `950`. |
| `colors.palette.slate.50` | `#f8fafc` | Raw palette color — hue `slate`, step `50`. |
| `colors.palette.slate.100` | `#f1f5f9` | Raw palette color — hue `slate`, step `100`. |
| `colors.palette.slate.200` | `#e2e8f0` | Raw palette color — hue `slate`, step `200`. |
| `colors.palette.slate.300` | `#cad5e2` | Raw palette color — hue `slate`, step `300`. |
| `colors.palette.slate.400` | `#90a1b9` | Raw palette color — hue `slate`, step `400`. |
| `colors.palette.slate.500` | `#62748e` | Raw palette color — hue `slate`, step `500`. |
| `colors.palette.slate.600` | `#45556c` | Raw palette color — hue `slate`, step `600`. |
| `colors.palette.slate.700` | `#314158` | Raw palette color — hue `slate`, step `700`. |
| `colors.palette.slate.800` | `#1d293d` | Raw palette color — hue `slate`, step `800`. |
| `colors.palette.slate.900` | `#0f172b` | Raw palette color — hue `slate`, step `900`. |
| `colors.palette.slate.950` | `#020618` | Raw palette color — hue `slate`, step `950`. |
| `colors.palette.gray.50` | `#f9fafb` | Raw palette color — hue `gray`, step `50`. |
| `colors.palette.gray.100` | `#f3f4f6` | Raw palette color — hue `gray`, step `100`. |
| `colors.palette.gray.200` | `#e5e7eb` | Raw palette color — hue `gray`, step `200`. |
| `colors.palette.gray.300` | `#d1d5dc` | Raw palette color — hue `gray`, step `300`. |
| `colors.palette.gray.400` | `#99a1af` | Raw palette color — hue `gray`, step `400`. |
| `colors.palette.gray.500` | `#6a7282` | Raw palette color — hue `gray`, step `500`. |
| `colors.palette.gray.600` | `#4a5565` | Raw palette color — hue `gray`, step `600`. |
| `colors.palette.gray.700` | `#364153` | Raw palette color — hue `gray`, step `700`. |
| `colors.palette.gray.800` | `#1e2939` | Raw palette color — hue `gray`, step `800`. |
| `colors.palette.gray.900` | `#101828` | Raw palette color — hue `gray`, step `900`. |
| `colors.palette.gray.950` | `#030712` | Raw palette color — hue `gray`, step `950`. |
| `colors.palette.zinc.50` | `#fafafa` | Raw palette color — hue `zinc`, step `50`. |
| `colors.palette.zinc.100` | `#f4f4f5` | Raw palette color — hue `zinc`, step `100`. |
| `colors.palette.zinc.200` | `#e4e4e7` | Raw palette color — hue `zinc`, step `200`. |
| `colors.palette.zinc.300` | `#d4d4d8` | Raw palette color — hue `zinc`, step `300`. |
| `colors.palette.zinc.400` | `#9f9fa9` | Raw palette color — hue `zinc`, step `400`. |
| `colors.palette.zinc.500` | `#71717b` | Raw palette color — hue `zinc`, step `500`. |
| `colors.palette.zinc.600` | `#52525c` | Raw palette color — hue `zinc`, step `600`. |
| `colors.palette.zinc.700` | `#3f3f46` | Raw palette color — hue `zinc`, step `700`. |
| `colors.palette.zinc.800` | `#27272a` | Raw palette color — hue `zinc`, step `800`. |
| `colors.palette.zinc.900` | `#18181b` | Raw palette color — hue `zinc`, step `900`. |
| `colors.palette.zinc.950` | `#09090b` | Raw palette color — hue `zinc`, step `950`. |
| `colors.palette.neutral.50` | `#fafafa` | Raw palette color — hue `neutral`, step `50`. |
| `colors.palette.neutral.100` | `#f5f5f5` | Raw palette color — hue `neutral`, step `100`. |
| `colors.palette.neutral.200` | `#e5e5e5` | Raw palette color — hue `neutral`, step `200`. |
| `colors.palette.neutral.300` | `#d4d4d4` | Raw palette color — hue `neutral`, step `300`. |
| `colors.palette.neutral.400` | `#a1a1a1` | Raw palette color — hue `neutral`, step `400`. |
| `colors.palette.neutral.500` | `#737373` | Raw palette color — hue `neutral`, step `500`. |
| `colors.palette.neutral.600` | `#525252` | Raw palette color — hue `neutral`, step `600`. |
| `colors.palette.neutral.700` | `#404040` | Raw palette color — hue `neutral`, step `700`. |
| `colors.palette.neutral.800` | `#262626` | Raw palette color — hue `neutral`, step `800`. |
| `colors.palette.neutral.900` | `#171717` | Raw palette color — hue `neutral`, step `900`. |
| `colors.palette.neutral.950` | `#0a0a0a` | Raw palette color — hue `neutral`, step `950`. |
| `colors.palette.stone.50` | `#fafaf9` | Raw palette color — hue `stone`, step `50`. |
| `colors.palette.stone.100` | `#f5f5f4` | Raw palette color — hue `stone`, step `100`. |
| `colors.palette.stone.200` | `#e7e5e4` | Raw palette color — hue `stone`, step `200`. |
| `colors.palette.stone.300` | `#d6d3d1` | Raw palette color — hue `stone`, step `300`. |
| `colors.palette.stone.400` | `#a6a09b` | Raw palette color — hue `stone`, step `400`. |
| `colors.palette.stone.500` | `#79716b` | Raw palette color — hue `stone`, step `500`. |
| `colors.palette.stone.600` | `#57534d` | Raw palette color — hue `stone`, step `600`. |
| `colors.palette.stone.700` | `#44403b` | Raw palette color — hue `stone`, step `700`. |
| `colors.palette.stone.800` | `#292524` | Raw palette color — hue `stone`, step `800`. |
| `colors.palette.stone.900` | `#1c1917` | Raw palette color — hue `stone`, step `900`. |
| `colors.palette.stone.950` | `#0c0a09` | Raw palette color — hue `stone`, step `950`. |
| `colors.palette.mauve.50` | `#fafafa` | Raw palette color — hue `mauve`, step `50`. |
| `colors.palette.mauve.100` | `#f3f1f3` | Raw palette color — hue `mauve`, step `100`. |
| `colors.palette.mauve.200` | `#e7e4e7` | Raw palette color — hue `mauve`, step `200`. |
| `colors.palette.mauve.300` | `#d7d0d7` | Raw palette color — hue `mauve`, step `300`. |
| `colors.palette.mauve.400` | `#a89ea9` | Raw palette color — hue `mauve`, step `400`. |
| `colors.palette.mauve.500` | `#79697b` | Raw palette color — hue `mauve`, step `500`. |
| `colors.palette.mauve.600` | `#594c5b` | Raw palette color — hue `mauve`, step `600`. |
| `colors.palette.mauve.700` | `#463947` | Raw palette color — hue `mauve`, step `700`. |
| `colors.palette.mauve.800` | `#2a212c` | Raw palette color — hue `mauve`, step `800`. |
| `colors.palette.mauve.900` | `#1d161e` | Raw palette color — hue `mauve`, step `900`. |
| `colors.palette.mauve.950` | `#0c090c` | Raw palette color — hue `mauve`, step `950`. |
| `colors.palette.olive.50` | `#fbfbf9` | Raw palette color — hue `olive`, step `50`. |
| `colors.palette.olive.100` | `#f4f4f0` | Raw palette color — hue `olive`, step `100`. |
| `colors.palette.olive.200` | `#e8e8e3` | Raw palette color — hue `olive`, step `200`. |
| `colors.palette.olive.300` | `#d8d8d0` | Raw palette color — hue `olive`, step `300`. |
| `colors.palette.olive.400` | `#abab9c` | Raw palette color — hue `olive`, step `400`. |
| `colors.palette.olive.500` | `#7c7c67` | Raw palette color — hue `olive`, step `500`. |
| `colors.palette.olive.600` | `#5b5b4b` | Raw palette color — hue `olive`, step `600`. |
| `colors.palette.olive.700` | `#474739` | Raw palette color — hue `olive`, step `700`. |
| `colors.palette.olive.800` | `#2b2b22` | Raw palette color — hue `olive`, step `800`. |
| `colors.palette.olive.900` | `#1d1d16` | Raw palette color — hue `olive`, step `900`. |
| `colors.palette.olive.950` | `#0c0c09` | Raw palette color — hue `olive`, step `950`. |
| `colors.palette.mist.50` | `#f9fbfb` | Raw palette color — hue `mist`, step `50`. |
| `colors.palette.mist.100` | `#f1f3f3` | Raw palette color — hue `mist`, step `100`. |
| `colors.palette.mist.200` | `#e3e7e8` | Raw palette color — hue `mist`, step `200`. |
| `colors.palette.mist.300` | `#d0d6d8` | Raw palette color — hue `mist`, step `300`. |
| `colors.palette.mist.400` | `#9ca8ab` | Raw palette color — hue `mist`, step `400`. |
| `colors.palette.mist.500` | `#67787c` | Raw palette color — hue `mist`, step `500`. |
| `colors.palette.mist.600` | `#4b585b` | Raw palette color — hue `mist`, step `600`. |
| `colors.palette.mist.700` | `#394447` | Raw palette color — hue `mist`, step `700`. |
| `colors.palette.mist.800` | `#22292b` | Raw palette color — hue `mist`, step `800`. |
| `colors.palette.mist.900` | `#161b1d` | Raw palette color — hue `mist`, step `900`. |
| `colors.palette.mist.950` | `#090b0c` | Raw palette color — hue `mist`, step `950`. |
| `colors.palette.taupe.50` | `#fbfaf9` | Raw palette color — hue `taupe`, step `50`. |
| `colors.palette.taupe.100` | `#f3f1f1` | Raw palette color — hue `taupe`, step `100`. |
| `colors.palette.taupe.200` | `#e8e4e3` | Raw palette color — hue `taupe`, step `200`. |
| `colors.palette.taupe.300` | `#d8d2d0` | Raw palette color — hue `taupe`, step `300`. |
| `colors.palette.taupe.400` | `#aba09c` | Raw palette color — hue `taupe`, step `400`. |
| `colors.palette.taupe.500` | `#7c6d67` | Raw palette color — hue `taupe`, step `500`. |
| `colors.palette.taupe.600` | `#5b4f4b` | Raw palette color — hue `taupe`, step `600`. |
| `colors.palette.taupe.700` | `#473c39` | Raw palette color — hue `taupe`, step `700`. |
| `colors.palette.taupe.800` | `#2b2422` | Raw palette color — hue `taupe`, step `800`. |
| `colors.palette.taupe.900` | `#1d1816` | Raw palette color — hue `taupe`, step `900`. |
| `colors.palette.taupe.950` | `#0c0a09` | Raw palette color — hue `taupe`, step `950`. |
| `colors.palette.integration-ink.50` | `#fafafb` | Raw palette color — hue `integration-ink`, step `50`. |
| `colors.palette.integration-ink.100` | `#f5f5f6` | Raw palette color — hue `integration-ink`, step `100`. |
| `colors.palette.integration-ink.200` | `#e7e8e9` | Raw palette color — hue `integration-ink`, step `200`. |
| `colors.palette.integration-ink.300` | `#d3d4d6` | Raw palette color — hue `integration-ink`, step `300`. |
| `colors.palette.integration-ink.400` | `#9ea0a3` | Raw palette color — hue `integration-ink`, step `400`. |
| `colors.palette.integration-ink.500` | `#707376` | Raw palette color — hue `integration-ink`, step `500`. |
| `colors.palette.integration-ink.600` | `#525457` | Raw palette color — hue `integration-ink`, step `600`. |
| `colors.palette.integration-ink.700` | `#3e4143` | Raw palette color — hue `integration-ink`, step `700`. |
| `colors.palette.integration-ink.800` | `#27292b` | Raw palette color — hue `integration-ink`, step `800`. |
| `colors.palette.integration-ink.900` | `#16181a` | Raw palette color — hue `integration-ink`, step `900`. |
| `colors.palette.integration-ink.950` | `#06080a` | Raw palette color — hue `integration-ink`, step `950`. |
| `colors.palette.integration-gunmetal.50` | `#f0f0f1` | Raw palette color — hue `integration-gunmetal`, step `50`. |
| `colors.palette.integration-gunmetal.100` | `#eaebec` | Raw palette color — hue `integration-gunmetal`, step `100`. |
| `colors.palette.integration-gunmetal.200` | `#dddedf` | Raw palette color — hue `integration-gunmetal`, step `200`. |
| `colors.palette.integration-gunmetal.300` | `#c8cbcd` | Raw palette color — hue `integration-gunmetal`, step `300`. |
| `colors.palette.integration-gunmetal.400` | `#93979a` | Raw palette color — hue `integration-gunmetal`, step `400`. |
| `colors.palette.integration-gunmetal.500` | `#666b6e` | Raw palette color — hue `integration-gunmetal`, step `500`. |
| `colors.palette.integration-gunmetal.600` | `#484c50` | Raw palette color — hue `integration-gunmetal`, step `600`. |
| `colors.palette.integration-gunmetal.700` | `#35393c` | Raw palette color — hue `integration-gunmetal`, step `700`. |
| `colors.palette.integration-gunmetal.800` | `#1f2225` | Raw palette color — hue `integration-gunmetal`, step `800`. |
| `colors.palette.integration-gunmetal.900` | `#0c1014` | Raw palette color — hue `integration-gunmetal`, step `900`. |
| `colors.palette.integration-gunmetal.950` | `#000104` | Raw palette color — hue `integration-gunmetal`, step `950`. |
| `colors.palette.integration-signal-blue.50` | `#ebf0f9` | Raw palette color — hue `integration-signal-blue`, step `50`. |
| `colors.palette.integration-signal-blue.100` | `#d8e3f8` | Raw palette color — hue `integration-signal-blue`, step `100`. |
| `colors.palette.integration-signal-blue.200` | `#bfd4f9` | Raw palette color — hue `integration-signal-blue`, step `200`. |
| `colors.palette.integration-signal-blue.300` | `#95bdf9` | Raw palette color — hue `integration-signal-blue`, step `300`. |
| `colors.palette.integration-signal-blue.400` | `#4a9df7` | Raw palette color — hue `integration-signal-blue`, step `400`. |
| `colors.palette.integration-signal-blue.500` | `#0083f7` | Raw palette color — hue `integration-signal-blue`, step `500`. |
| `colors.palette.integration-signal-blue.600` | `#006dfa` | Raw palette color — hue `integration-signal-blue`, step `600`. |
| `colors.palette.integration-signal-blue.700` | `#005ce8` | Raw palette color — hue `integration-signal-blue`, step `700`. |
| `colors.palette.integration-signal-blue.800` | `#004bb8` | Raw palette color — hue `integration-signal-blue`, step `800`. |
| `colors.palette.integration-signal-blue.900` | `#003f8a` | Raw palette color — hue `integration-signal-blue`, step `900`. |
| `colors.palette.integration-signal-blue.950` | `#002552` | Raw palette color — hue `integration-signal-blue`, step `950`. |
| `colors.palette.integration-icy-blue.50` | `#e4f0fa` | Raw palette color — hue `integration-icy-blue`, step `50`. |
| `colors.palette.integration-icy-blue.100` | `#cbe5fb` | Raw palette color — hue `integration-icy-blue`, step `100`. |
| `colors.palette.integration-icy-blue.200` | `#a4d8ff` | Raw palette color — hue `integration-icy-blue`, step `200`. |
| `colors.palette.integration-icy-blue.300` | `#59c4ff` | Raw palette color — hue `integration-icy-blue`, step `300`. |
| `colors.palette.integration-icy-blue.400` | `#00a8ff` | Raw palette color — hue `integration-icy-blue`, step `400`. |
| `colors.palette.integration-icy-blue.500` | `#0090ff` | Raw palette color — hue `integration-icy-blue`, step `500`. |
| `colors.palette.integration-icy-blue.600` | `#007cff` | Raw palette color — hue `integration-icy-blue`, step `600`. |
| `colors.palette.integration-icy-blue.700` | `#006aff` | Raw palette color — hue `integration-icy-blue`, step `700`. |
| `colors.palette.integration-icy-blue.800` | `#0055ce` | Raw palette color — hue `integration-icy-blue`, step `800`. |
| `colors.palette.integration-icy-blue.900` | `#004699` | Raw palette color — hue `integration-icy-blue`, step `900`. |
| `colors.palette.integration-icy-blue.950` | `#002a5a` | Raw palette color — hue `integration-icy-blue`, step `950`. |
| `colors.palette.phcdevworks-raspberry-red.50` | `#fff3f4` | Raw palette color — hue `phcdevworks-raspberry-red`, step `50`. |
| `colors.palette.phcdevworks-raspberry-red.100` | `#ffe7e8` | Raw palette color — hue `phcdevworks-raspberry-red`, step `100`. |
| `colors.palette.phcdevworks-raspberry-red.200` | `#ffcfd2` | Raw palette color — hue `phcdevworks-raspberry-red`, step `200`. |
| `colors.palette.phcdevworks-raspberry-red.300` | `#fea5ae` | Raw palette color — hue `phcdevworks-raspberry-red`, step `300`. |
| `colors.palette.phcdevworks-raspberry-red.400` | `#fd6982` | Raw palette color — hue `phcdevworks-raspberry-red`, step `400`. |
| `colors.palette.phcdevworks-raspberry-red.500` | `#fe2b67` | Raw palette color — hue `phcdevworks-raspberry-red`, step `500`. |
| `colors.palette.phcdevworks-raspberry-red.600` | `#ee005a` | Raw palette color — hue `phcdevworks-raspberry-red`, step `600`. |
| `colors.palette.phcdevworks-raspberry-red.700` | `#c8054b` | Raw palette color — hue `phcdevworks-raspberry-red`, step `700`. |
| `colors.palette.phcdevworks-raspberry-red.800` | `#a4113e` | Raw palette color — hue `phcdevworks-raspberry-red`, step `800`. |
| `colors.palette.phcdevworks-raspberry-red.900` | `#8a1635` | Raw palette color — hue `phcdevworks-raspberry-red`, step `900`. |
| `colors.palette.phcdevworks-raspberry-red.950` | `#4d081a` | Raw palette color — hue `phcdevworks-raspberry-red`, step `950`. |
| `colors.palette.phcdevworks-deep-space-blue.50` | `#edf1f7` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `50`. |
| `colors.palette.phcdevworks-deep-space-blue.100` | `#dce5f1` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `100`. |
| `colors.palette.phcdevworks-deep-space-blue.200` | `#c4d5ec` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `200`. |
| `colors.palette.phcdevworks-deep-space-blue.300` | `#a1bee3` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `300`. |
| `colors.palette.phcdevworks-deep-space-blue.400` | `#6b9ed5` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `400`. |
| `colors.palette.phcdevworks-deep-space-blue.500` | `#2583ca` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `500`. |
| `colors.palette.phcdevworks-deep-space-blue.600` | `#006dc2` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `600`. |
| `colors.palette.phcdevworks-deep-space-blue.700` | `#005bb0` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `700`. |
| `colors.palette.phcdevworks-deep-space-blue.800` | `#004a8c` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `800`. |
| `colors.palette.phcdevworks-deep-space-blue.900` | `#003f6d` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `900`. |
| `colors.palette.phcdevworks-deep-space-blue.950` | `#012641` | Raw palette color — hue `phcdevworks-deep-space-blue`, step `950`. |
| `colors.palette.phcdevworks-paper.50` | `#fcfaf7` | Raw palette color — hue `phcdevworks-paper`, step `50`. |
| `colors.palette.phcdevworks-paper.100` | `#f7f5f2` | Raw palette color — hue `phcdevworks-paper`, step `100`. |
| `colors.palette.phcdevworks-paper.200` | `#e9e5e0` | Raw palette color — hue `phcdevworks-paper`, step `200`. |
| `colors.palette.phcdevworks-paper.300` | `#d9d3ca` | Raw palette color — hue `phcdevworks-paper`, step `300`. |
| `colors.palette.phcdevworks-paper.400` | `#aca08b` | Raw palette color — hue `phcdevworks-paper`, step `400`. |
| `colors.palette.phcdevworks-paper.500` | `#807056` | Raw palette color — hue `phcdevworks-paper`, step `500`. |
| `colors.palette.phcdevworks-paper.600` | `#5e523d` | Raw palette color — hue `phcdevworks-paper`, step `600`. |
| `colors.palette.phcdevworks-paper.700` | `#4a3f2d` | Raw palette color — hue `phcdevworks-paper`, step `700`. |
| `colors.palette.phcdevworks-paper.800` | `#2b251b` | Raw palette color — hue `phcdevworks-paper`, step `800`. |
| `colors.palette.phcdevworks-paper.900` | `#1f190e` | Raw palette color — hue `phcdevworks-paper`, step `900`. |
| `colors.palette.phcdevworks-paper.950` | `#0e0a05` | Raw palette color — hue `phcdevworks-paper`, step `950`. |

## space

| Path | Value | Usage |
| ---- | ----- | ----- |
| `space.0` | `0rem` | space token. |
| `space.1` | `0.0625rem` | space token. |
| `space.2` | `0.125rem` | space token. |
| `space.4` | `0.25rem` | space token. |
| `space.6` | `0.375rem` | space token. |
| `space.8` | `0.5rem` | space token. |
| `space.10` | `0.625rem` | space token. |
| `space.12` | `0.75rem` | space token. |
| `space.14` | `0.875rem` | space token. |
| `space.16` | `1rem` | space token. |
| `space.20` | `1.25rem` | space token. |
| `space.24` | `1.5rem` | space token. |
| `space.28` | `1.75rem` | space token. |
| `space.32` | `2rem` | space token. |
| `space.40` | `2.5rem` | space token. |
| `space.48` | `3rem` | space token. |
| `space.56` | `3.5rem` | space token. |
| `space.64` | `4rem` | space token. |
| `space.72` | `4.5rem` | space token. |
| `space.80` | `5rem` | space token. |
| `space.96` | `6rem` | space token. |
| `space.240` | `15rem` | space token. |

## layout

| Path | Value | Usage |
| ---- | ----- | ----- |
| `layout.section.padding.sm` | `1.5rem` | layout token. |
| `layout.section.padding.md` | `2rem` | layout token. |
| `layout.section.padding.lg` | `3rem` | layout token. |
| `layout.section.gap.sm` | `1rem` | layout token. |
| `layout.section.gap.md` | `1.5rem` | layout token. |
| `layout.section.gap.lg` | `2rem` | layout token. |
| `layout.stack.gap.sm` | `0.5rem` | layout token. |
| `layout.stack.gap.md` | `0.75rem` | layout token. |
| `layout.stack.gap.lg` | `1rem` | layout token. |
| `layout.container.paddingInline.sm` | `1rem` | layout token. |
| `layout.container.paddingInline.md` | `1.5rem` | layout token. |
| `layout.container.paddingInline.lg` | `2rem` | layout token. |
| `layout.container.maxWidth` | `72rem` | layout token. |
| `layout.container.maxWidthProse` | `65ch` | layout token. |
| `layout.container.maxWidthWide` | `80rem` | layout token. |
| `layout.sidebar.width` | `16rem` | layout token. |

## radii

| Path | Value | Usage |
| ---- | ----- | ----- |
| `radii.none` | `0` | radii token. |
| `radii.sm` | `2px` | radii token. |
| `radii.md` | `4px` | radii token. |
| `radii.lg` | `8px` | radii token. |
| `radii.xl` | `12px` | radii token. |
| `radii.2xl` | `16px` | radii token. |
| `radii.3xl` | `24px` | radii token. |
| `radii.4xl` | `32px` | radii token. |
| `radii.pill` | `999px` | radii token. |

## typography

| Path | Value | Usage |
| ---- | ----- | ----- |
| `typography.families.sans` | `system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif` | typography token. |
| `typography.families.serif` | `'Times New Roman', Times, serif` | typography token. |
| `typography.families.mono` | `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace` | typography token. |
| `typography.scale.xs.fontSize` | `0.75rem` | typography token. |
| `typography.scale.xs.lineHeight` | `1.25rem` | typography token. |
| `typography.scale.xs.fontWeight` | `400` | typography token. |
| `typography.scale.xs.letterSpacing` | `0.02em` | typography token. |
| `typography.scale.sm.fontSize` | `0.875rem` | typography token. |
| `typography.scale.sm.lineHeight` | `1.5rem` | typography token. |
| `typography.scale.sm.fontWeight` | `400` | typography token. |
| `typography.scale.sm.letterSpacing` | `0em` | typography token. |
| `typography.scale.md.fontSize` | `1rem` | typography token. |
| `typography.scale.md.lineHeight` | `1.75rem` | typography token. |
| `typography.scale.md.fontWeight` | `500` | typography token. |
| `typography.scale.md.letterSpacing` | `0em` | typography token. |
| `typography.scale.lg.fontSize` | `1.25rem` | typography token. |
| `typography.scale.lg.lineHeight` | `2rem` | typography token. |
| `typography.scale.lg.fontWeight` | `600` | typography token. |
| `typography.scale.lg.letterSpacing` | `0em` | typography token. |
| `typography.scale.xl.fontSize` | `1.5rem` | typography token. |
| `typography.scale.xl.lineHeight` | `2.125rem` | typography token. |
| `typography.scale.xl.fontWeight` | `600` | typography token. |
| `typography.scale.xl.letterSpacing` | `0em` | typography token. |
| `typography.scale.2xl.fontSize` | `1.875rem` | typography token. |
| `typography.scale.2xl.lineHeight` | `2.5rem` | typography token. |
| `typography.scale.2xl.fontWeight` | `700` | typography token. |
| `typography.scale.2xl.letterSpacing` | `0em` | typography token. |
| `typography.scale.3xl.fontSize` | `2.25rem` | typography token. |
| `typography.scale.3xl.lineHeight` | `2.75rem` | typography token. |
| `typography.scale.3xl.fontWeight` | `700` | typography token. |
| `typography.scale.3xl.letterSpacing` | `0em` | typography token. |
| `typography.scale.4xl.fontSize` | `3rem` | typography token. |
| `typography.scale.4xl.lineHeight` | `3.5rem` | typography token. |
| `typography.scale.4xl.fontWeight` | `800` | typography token. |
| `typography.scale.4xl.letterSpacing` | `0em` | typography token. |
| `typography.scale.5xl.fontSize` | `3.75rem` | typography token. |
| `typography.scale.5xl.lineHeight` | `4.25rem` | typography token. |
| `typography.scale.5xl.fontWeight` | `800` | typography token. |
| `typography.scale.5xl.letterSpacing` | `0em` | typography token. |
| `typography.scale.6xl.fontSize` | `4.5rem` | typography token. |
| `typography.scale.6xl.lineHeight` | `5rem` | typography token. |
| `typography.scale.6xl.fontWeight` | `900` | typography token. |
| `typography.scale.6xl.letterSpacing` | `0em` | typography token. |
| `typography.heading.h1.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.heading.h1.fontSize` | `{typography.scale.5xl.fontSize}` | typography token. |
| `typography.heading.h1.lineHeight` | `{typography.scale.5xl.lineHeight}` | typography token. |
| `typography.heading.h1.fontWeight` | `800` | typography token. |
| `typography.heading.h1.letterSpacing` | `{typography.scale.5xl.letterSpacing}` | typography token. |
| `typography.heading.h2.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.heading.h2.fontSize` | `{typography.scale.4xl.fontSize}` | typography token. |
| `typography.heading.h2.lineHeight` | `{typography.scale.4xl.lineHeight}` | typography token. |
| `typography.heading.h2.fontWeight` | `700` | typography token. |
| `typography.heading.h2.letterSpacing` | `{typography.scale.4xl.letterSpacing}` | typography token. |
| `typography.heading.h3.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.heading.h3.fontSize` | `{typography.scale.3xl.fontSize}` | typography token. |
| `typography.heading.h3.lineHeight` | `{typography.scale.3xl.lineHeight}` | typography token. |
| `typography.heading.h3.fontWeight` | `700` | typography token. |
| `typography.heading.h3.letterSpacing` | `{typography.scale.3xl.letterSpacing}` | typography token. |
| `typography.heading.h4.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.heading.h4.fontSize` | `{typography.scale.2xl.fontSize}` | typography token. |
| `typography.heading.h4.lineHeight` | `{typography.scale.2xl.lineHeight}` | typography token. |
| `typography.heading.h4.fontWeight` | `600` | typography token. |
| `typography.heading.h4.letterSpacing` | `{typography.scale.2xl.letterSpacing}` | typography token. |
| `typography.heading.h5.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.heading.h5.fontSize` | `{typography.scale.xl.fontSize}` | typography token. |
| `typography.heading.h5.lineHeight` | `{typography.scale.xl.lineHeight}` | typography token. |
| `typography.heading.h5.fontWeight` | `600` | typography token. |
| `typography.heading.h5.letterSpacing` | `{typography.scale.xl.letterSpacing}` | typography token. |
| `typography.heading.h6.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.heading.h6.fontSize` | `{typography.scale.lg.fontSize}` | typography token. |
| `typography.heading.h6.lineHeight` | `{typography.scale.lg.lineHeight}` | typography token. |
| `typography.heading.h6.fontWeight` | `600` | typography token. |
| `typography.heading.h6.letterSpacing` | `{typography.scale.lg.letterSpacing}` | typography token. |
| `typography.body.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.body.fontSize` | `{typography.scale.md.fontSize}` | typography token. |
| `typography.body.lineHeight` | `{typography.scale.md.lineHeight}` | typography token. |
| `typography.body.fontWeight` | `400` | typography token. |
| `typography.body.letterSpacing` | `{typography.scale.md.letterSpacing}` | typography token. |
| `typography.display.1.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.display.1.fontSize` | `{typography.scale.6xl.fontSize}` | typography token. |
| `typography.display.1.lineHeight` | `{typography.scale.6xl.lineHeight}` | typography token. |
| `typography.display.1.fontWeight` | `800` | typography token. |
| `typography.display.1.letterSpacing` | `{typography.scale.6xl.letterSpacing}` | typography token. |
| `typography.display.2.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.display.2.fontSize` | `{typography.scale.5xl.fontSize}` | typography token. |
| `typography.display.2.lineHeight` | `{typography.scale.5xl.lineHeight}` | typography token. |
| `typography.display.2.fontWeight` | `800` | typography token. |
| `typography.display.2.letterSpacing` | `{typography.scale.5xl.letterSpacing}` | typography token. |
| `typography.display.3.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.display.3.fontSize` | `{typography.scale.4xl.fontSize}` | typography token. |
| `typography.display.3.lineHeight` | `{typography.scale.4xl.lineHeight}` | typography token. |
| `typography.display.3.fontWeight` | `700` | typography token. |
| `typography.display.3.letterSpacing` | `{typography.scale.4xl.letterSpacing}` | typography token. |
| `typography.display.4.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.display.4.fontSize` | `{typography.scale.3xl.fontSize}` | typography token. |
| `typography.display.4.lineHeight` | `{typography.scale.3xl.lineHeight}` | typography token. |
| `typography.display.4.fontWeight` | `700` | typography token. |
| `typography.display.4.letterSpacing` | `{typography.scale.3xl.letterSpacing}` | typography token. |
| `typography.display.5.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.display.5.fontSize` | `{typography.scale.2xl.fontSize}` | typography token. |
| `typography.display.5.lineHeight` | `{typography.scale.2xl.lineHeight}` | typography token. |
| `typography.display.5.fontWeight` | `600` | typography token. |
| `typography.display.5.letterSpacing` | `{typography.scale.2xl.letterSpacing}` | typography token. |
| `typography.display.6.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.display.6.fontSize` | `{typography.scale.xl.fontSize}` | typography token. |
| `typography.display.6.lineHeight` | `{typography.scale.xl.lineHeight}` | typography token. |
| `typography.display.6.fontWeight` | `600` | typography token. |
| `typography.display.6.letterSpacing` | `{typography.scale.xl.letterSpacing}` | typography token. |
| `typography.lead.fontFamily` | `{typography.families.sans}` | typography token. |
| `typography.lead.fontSize` | `{typography.scale.lg.fontSize}` | typography token. |
| `typography.lead.lineHeight` | `{typography.scale.lg.lineHeight}` | typography token. |
| `typography.lead.fontWeight` | `400` | typography token. |
| `typography.lead.letterSpacing` | `{typography.scale.lg.letterSpacing}` | typography token. |

## font

| Path | Value | Usage |
| ---- | ----- | ----- |
| `font.xs.size` | `{typography.scale.xs.fontSize}` | font token. |
| `font.xs.lineHeight` | `{typography.scale.xs.lineHeight}` | font token. |
| `font.xs.weight` | `{typography.scale.xs.fontWeight}` | font token. |
| `font.xs.letterSpacing` | `{typography.scale.xs.letterSpacing}` | font token. |
| `font.sm.size` | `{typography.scale.sm.fontSize}` | font token. |
| `font.sm.lineHeight` | `{typography.scale.sm.lineHeight}` | font token. |
| `font.sm.weight` | `{typography.scale.sm.fontWeight}` | font token. |
| `font.sm.letterSpacing` | `{typography.scale.sm.letterSpacing}` | font token. |
| `font.md.size` | `{typography.scale.md.fontSize}` | font token. |
| `font.md.lineHeight` | `{typography.scale.md.lineHeight}` | font token. |
| `font.md.weight` | `{typography.scale.md.fontWeight}` | font token. |
| `font.md.letterSpacing` | `{typography.scale.md.letterSpacing}` | font token. |
| `font.lg.size` | `{typography.scale.lg.fontSize}` | font token. |
| `font.lg.lineHeight` | `{typography.scale.lg.lineHeight}` | font token. |
| `font.lg.weight` | `{typography.scale.lg.fontWeight}` | font token. |
| `font.lg.letterSpacing` | `{typography.scale.lg.letterSpacing}` | font token. |
| `font.xl.size` | `{typography.scale.xl.fontSize}` | font token. |
| `font.xl.lineHeight` | `{typography.scale.xl.lineHeight}` | font token. |
| `font.xl.weight` | `{typography.scale.xl.fontWeight}` | font token. |
| `font.xl.letterSpacing` | `{typography.scale.xl.letterSpacing}` | font token. |
| `font.2xl.size` | `{typography.scale.2xl.fontSize}` | font token. |
| `font.2xl.lineHeight` | `{typography.scale.2xl.lineHeight}` | font token. |
| `font.2xl.weight` | `{typography.scale.2xl.fontWeight}` | font token. |
| `font.2xl.letterSpacing` | `{typography.scale.2xl.letterSpacing}` | font token. |
| `font.3xl.size` | `{typography.scale.3xl.fontSize}` | font token. |
| `font.3xl.lineHeight` | `{typography.scale.3xl.lineHeight}` | font token. |
| `font.3xl.weight` | `{typography.scale.3xl.fontWeight}` | font token. |
| `font.3xl.letterSpacing` | `{typography.scale.3xl.letterSpacing}` | font token. |
| `font.4xl.size` | `{typography.scale.4xl.fontSize}` | font token. |
| `font.4xl.lineHeight` | `{typography.scale.4xl.lineHeight}` | font token. |
| `font.4xl.weight` | `{typography.scale.4xl.fontWeight}` | font token. |
| `font.4xl.letterSpacing` | `{typography.scale.4xl.letterSpacing}` | font token. |
| `font.5xl.size` | `{typography.scale.5xl.fontSize}` | font token. |
| `font.5xl.lineHeight` | `{typography.scale.5xl.lineHeight}` | font token. |
| `font.5xl.weight` | `{typography.scale.5xl.fontWeight}` | font token. |
| `font.5xl.letterSpacing` | `{typography.scale.5xl.letterSpacing}` | font token. |
| `font.6xl.size` | `{typography.scale.6xl.fontSize}` | font token. |
| `font.6xl.lineHeight` | `{typography.scale.6xl.lineHeight}` | font token. |
| `font.6xl.weight` | `{typography.scale.6xl.fontWeight}` | font token. |
| `font.6xl.letterSpacing` | `{typography.scale.6xl.letterSpacing}` | font token. |

## shadows

| Path | Value | Usage |
| ---- | ----- | ----- |
| `shadows.none` | `none` | shadows token. |
| `shadows.sm` | `0 1px 2px 0 {colors.black} / 0.06` | shadows token. |
| `shadows.md` | `0 2px 6px -1px {colors.black} / 0.08` | shadows token. |
| `shadows.lg` | `0 6px 16px -4px {colors.black} / 0.12` | shadows token. |
| `shadows.xl` | `0 12px 24px -6px {colors.black} / 0.15` | shadows token. |
| `shadows.2xl` | `0 20px 48px -12px {colors.black} / 0.20` | shadows token. |
| `shadows.inset.sm` | `inset 0 1px 2px 0 {colors.black} / 0.06, inset 0 -1px 2px 0 {colors.black} / 0.06` | shadows token. |
| `shadows.inset.md` | `inset 0 2px 6px -1px {colors.black} / 0.08, inset 0 -2px 6px -1px {colors.black} / 0.08` | shadows token. |
| `shadows.inset.lg` | `inset 0 6px 16px -4px {colors.black} / 0.12, inset 0 -6px 16px -4px {colors.black} / 0.12` | shadows token. |
| `shadows.inset.xl` | `inset 0 12px 24px -6px {colors.black} / 0.15, inset 0 -12px 24px -6px {colors.black} / 0.15` | shadows token. |
| `shadows.inset.2xl` | `inset 0 20px 48px -12px {colors.black} / 0.20, inset 0 -20px 48px -12px {colors.black} / 0.20` | shadows token. |

## breakpoints

| Path | Value | Usage |
| ---- | ----- | ----- |
| `breakpoints.sm` | `640px` | breakpoints token. |
| `breakpoints.md` | `768px` | breakpoints token. |
| `breakpoints.lg` | `1024px` | breakpoints token. |
| `breakpoints.xl` | `1280px` | breakpoints token. |
| `breakpoints.2xl` | `1536px` | breakpoints token. |

## zIndex

| Path | Value | Usage |
| ---- | ----- | ----- |
| `zIndex.base` | `0` | zIndex token. |
| `zIndex.dropdown` | `1000` | zIndex token. |
| `zIndex.sticky` | `1100` | zIndex token. |
| `zIndex.fixed` | `1200` | zIndex token. |
| `zIndex.overlay` | `1300` | zIndex token. |
| `zIndex.modal` | `1400` | zIndex token. |
| `zIndex.popover` | `1500` | zIndex token. |
| `zIndex.tooltip` | `1600` | zIndex token. |
| `zIndex.toast` | `1700` | zIndex token. |

## transitions

| Path | Value | Usage |
| ---- | ----- | ----- |
| `transitions.duration.reduced` | `0.01ms` | transitions token. |
| `transitions.duration.instant` | `75ms` | transitions token. |
| `transitions.duration.fast` | `150ms` | transitions token. |
| `transitions.duration.base` | `200ms` | transitions token. |
| `transitions.duration.relaxed` | `250ms` | transitions token. |
| `transitions.duration.moderate` | `300ms` | transitions token. |
| `transitions.duration.slow` | `500ms` | transitions token. |
| `transitions.duration.slower` | `700ms` | transitions token. |
| `transitions.duration.long` | `1000ms` | transitions token. |
| `transitions.duration.slowest` | `1200ms` | transitions token. |
| `transitions.easing.linear` | `linear` | transitions token. |
| `transitions.easing.in` | `cubic-bezier(0.4, 0, 1, 1)` | transitions token. |
| `transitions.easing.out` | `cubic-bezier(0, 0, 0.2, 1)` | transitions token. |
| `transitions.easing.inOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | transitions token. |
| `transitions.easing.spring` | `cubic-bezier(0.4, 0, 0.2, 1)` | transitions token. |
| `transitions.easing.overshoot` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | transitions token. |

## animations

| Path | Value | Usage |
| ---- | ----- | ----- |
| `animations.fadeIn.duration` | `{transitions.duration.base}` | animations token. |
| `animations.fadeIn.easing` | `{transitions.easing.out}` | animations token. |
| `animations.fadeIn.keyframes` | `fade-in` | animations token. |
| `animations.fadeOut.duration` | `{transitions.duration.fast}` | animations token. |
| `animations.fadeOut.easing` | `{transitions.easing.in}` | animations token. |
| `animations.fadeOut.keyframes` | `fade-out` | animations token. |
| `animations.slideUp.duration` | `{transitions.duration.moderate}` | animations token. |
| `animations.slideUp.easing` | `{transitions.easing.out}` | animations token. |
| `animations.slideUp.keyframes` | `slide-up` | animations token. |
| `animations.slideDown.duration` | `{transitions.duration.moderate}` | animations token. |
| `animations.slideDown.easing` | `{transitions.easing.out}` | animations token. |
| `animations.slideDown.keyframes` | `slide-down` | animations token. |
| `animations.scaleIn.duration` | `{transitions.duration.base}` | animations token. |
| `animations.scaleIn.easing` | `{transitions.easing.overshoot}` | animations token. |
| `animations.scaleIn.keyframes` | `scale-in` | animations token. |
| `animations.bounce.duration` | `{transitions.duration.moderate}` | animations token. |
| `animations.bounce.easing` | `{transitions.easing.spring}` | animations token. |
| `animations.bounce.keyframes` | `bounce` | animations token. |
| `animations.shake.duration` | `{transitions.duration.relaxed}` | animations token. |
| `animations.shake.easing` | `{transitions.easing.spring}` | animations token. |
| `animations.shake.keyframes` | `shake` | animations token. |
| `animations.pulse.duration` | `{transitions.duration.slowest}` | animations token. |
| `animations.pulse.easing` | `{transitions.easing.spring}` | animations token. |
| `animations.pulse.keyframes` | `pulse` | animations token. |
| `animations.reducedMotion.fadeIn.duration` | `{transitions.duration.reduced}` | animations token. |
| `animations.reducedMotion.fadeIn.easing` | `{transitions.easing.linear}` | animations token. |
| `animations.reducedMotion.fadeIn.keyframes` | `fade-in` | animations token. |
| `animations.reducedMotion.fadeOut.duration` | `{transitions.duration.reduced}` | animations token. |
| `animations.reducedMotion.fadeOut.easing` | `{transitions.easing.linear}` | animations token. |
| `animations.reducedMotion.fadeOut.keyframes` | `fade-out` | animations token. |
| `animations.reducedMotion.slideUp.duration` | `{transitions.duration.reduced}` | animations token. |
| `animations.reducedMotion.slideUp.easing` | `{transitions.easing.linear}` | animations token. |
| `animations.reducedMotion.slideUp.keyframes` | `slide-up` | animations token. |
| `animations.reducedMotion.slideDown.duration` | `{transitions.duration.reduced}` | animations token. |
| `animations.reducedMotion.slideDown.easing` | `{transitions.easing.linear}` | animations token. |
| `animations.reducedMotion.slideDown.keyframes` | `slide-down` | animations token. |
| `animations.reducedMotion.scaleIn.duration` | `{transitions.duration.reduced}` | animations token. |
| `animations.reducedMotion.scaleIn.easing` | `{transitions.easing.linear}` | animations token. |
| `animations.reducedMotion.scaleIn.keyframes` | `scale-in` | animations token. |
| `animations.reducedMotion.bounce.duration` | `{transitions.duration.reduced}` | animations token. |
| `animations.reducedMotion.bounce.easing` | `{transitions.easing.linear}` | animations token. |
| `animations.reducedMotion.bounce.keyframes` | `bounce` | animations token. |
| `animations.reducedMotion.shake.duration` | `{transitions.duration.reduced}` | animations token. |
| `animations.reducedMotion.shake.easing` | `{transitions.easing.linear}` | animations token. |
| `animations.reducedMotion.shake.keyframes` | `shake` | animations token. |
| `animations.reducedMotion.pulse.duration` | `{transitions.duration.reduced}` | animations token. |
| `animations.reducedMotion.pulse.easing` | `{transitions.easing.linear}` | animations token. |
| `animations.reducedMotion.pulse.keyframes` | `pulse` | animations token. |

## opacity

| Path | Value | Usage |
| ---- | ----- | ----- |
| `opacity.disabled` | `0.38` | opacity token. |
| `opacity.hover` | `0.92` | opacity token. |
| `opacity.active` | `0.84` | opacity token. |
| `opacity.loading` | `0.6` | opacity token. |
| `opacity.focus` | `1` | opacity token. |
| `opacity.overlay` | `0.5` | opacity token. |
| `opacity.tooltip` | `0.95` | opacity token. |

## aspectRatios

| Path | Value | Usage |
| ---- | ----- | ----- |
| `aspectRatios.square` | `1/1` | aspectRatios token. |
| `aspectRatios.video` | `16/9` | aspectRatios token. |
| `aspectRatios.classic` | `3/2` | aspectRatios token. |
| `aspectRatios.portrait` | `3/4` | aspectRatios token. |
| `aspectRatios.landscape` | `4/3` | aspectRatios token. |
| `aspectRatios.ultrawide` | `21/9` | aspectRatios token. |
| `aspectRatios.hero` | `2/1` | aspectRatios token. |

## icons

| Path | Value | Usage |
| ---- | ----- | ----- |
| `icons.xs` | `12px` | icons token. |
| `icons.sm` | `16px` | icons token. |
| `icons.md` | `20px` | icons token. |
| `icons.lg` | `24px` | icons token. |
| `icons.xl` | `32px` | icons token. |
| `icons.2xl` | `40px` | icons token. |
| `icons.3xl` | `48px` | icons token. |

## border

| Path | Value | Usage |
| ---- | ----- | ----- |
| `border.width.none` | `0` | border token. |
| `border.width.base` | `1px` | border token. |
| `border.width.thick` | `2px` | border token. |
| `border.style.none` | `none` | border token. |
| `border.style.solid` | `solid` | border token. |
| `border.style.dashed` | `dashed` | border token. |
| `border.style.dotted` | `dotted` | border token. |

## accessibility

| Path | Value | Usage |
| ---- | ----- | ----- |
| `accessibility.focusRing.width` | `2px` | accessibility token. |
| `accessibility.focusRing.offset` | `2px` | accessibility token. |
| `accessibility.focusRing.style` | `solid` | accessibility token. |
| `accessibility.reducedMotion` | `{transitions.duration.reduced}` | accessibility token. |
| `accessibility.forcedColors` | `auto` | accessibility token. |
| `accessibility.minTouchTarget` | `44px` | accessibility token. |
| `accessibility.minTextSize` | `16px` | accessibility token. |

## buttons

| Path | Value | Usage |
| ---- | ----- | ----- |
| `buttons.primary.bg` | `{colors.info.600}` | Pairs with `buttons.primary.text` for contrast. |
| `buttons.primary.bgHover` | `{colors.info.700}` | Pairs with `buttons.primary.text` for contrast. |
| `buttons.primary.bgActive` | `{colors.info.800}` | Pairs with `buttons.primary.text` for contrast. |
| `buttons.primary.bgDisabled` | `{colors.neutral.200}` | buttons token. |
| `buttons.primary.text` | `{colors.white}` | Pairs with `buttons.primary.bg` for contrast. |
| `buttons.primary.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.primary.focusRing` | `{colors.info.500} / 0.4` | buttons token. |
| `buttons.primary.focusVisible` | `{colors.info.500} / 0.4` | buttons token. |
| `buttons.secondary.bg` | `{colors.white}` | Pairs with `buttons.secondary.text` for contrast. |
| `buttons.secondary.bgHover` | `{colors.neutral.50}` | Pairs with `buttons.secondary.text` for contrast. |
| `buttons.secondary.bgActive` | `{colors.neutral.100}` | Pairs with `buttons.secondary.text` for contrast. |
| `buttons.secondary.bgDisabled` | `{colors.neutral.50}` | buttons token. |
| `buttons.secondary.text` | `{colors.info.700}` | Pairs with `buttons.secondary.bg` for contrast. |
| `buttons.secondary.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.secondary.border` | `{colors.info.700}` | buttons token. |
| `buttons.secondary.borderDisabled` | `{colors.neutral.200}` | buttons token. |
| `buttons.secondary.focusRing` | `{colors.info.500} / 0.4` | buttons token. |
| `buttons.secondary.focusVisible` | `{colors.info.500} / 0.4` | buttons token. |
| `buttons.ghost.bg` | `transparent` | buttons token. |
| `buttons.ghost.bgHover` | `{colors.info.50}` | Pairs with `buttons.ghost.text` for contrast. |
| `buttons.ghost.bgActive` | `{colors.info.100}` | Pairs with `buttons.ghost.text` for contrast. |
| `buttons.ghost.bgDisabled` | `transparent` | buttons token. |
| `buttons.ghost.text` | `{colors.info.700}` | Pairs with `buttons.ghost.bgHover` for contrast. |
| `buttons.ghost.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.ghost.focusRing` | `{colors.info.500} / 0.4` | buttons token. |
| `buttons.ghost.focusVisible` | `{colors.info.500} / 0.4` | buttons token. |
| `buttons.danger.bg` | `{colors.error.600}` | Pairs with `buttons.danger.text` for contrast. |
| `buttons.danger.bgHover` | `{colors.error.700}` | Pairs with `buttons.danger.text` for contrast. |
| `buttons.danger.bgActive` | `{colors.error.800}` | Pairs with `buttons.danger.text` for contrast. |
| `buttons.danger.bgDisabled` | `{colors.error.200}` | buttons token. |
| `buttons.danger.text` | `{colors.white}` | buttons token. |
| `buttons.danger.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.danger.focusRing` | `{colors.error.500} / 0.4` | buttons token. |
| `buttons.danger.focusVisible` | `{colors.error.500} / 0.4` | buttons token. |
| `buttons.success.bg` | `{colors.success.700}` | Pairs with `buttons.success.text` for contrast. |
| `buttons.success.bgHover` | `{colors.success.800}` | Pairs with `buttons.success.text` for contrast. |
| `buttons.success.bgActive` | `{colors.success.900}` | Pairs with `buttons.success.text` for contrast. |
| `buttons.success.bgDisabled` | `{colors.success.200}` | buttons token. |
| `buttons.success.text` | `{colors.white}` | buttons token. |
| `buttons.success.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.success.focusRing` | `{colors.success.500} / 0.4` | buttons token. |
| `buttons.success.focusVisible` | `{colors.success.500} / 0.4` | buttons token. |
| `buttons.warning.bg` | `{colors.warning.800}` | Pairs with `buttons.warning.text` for contrast. |
| `buttons.warning.bgHover` | `{colors.warning.900}` | Pairs with `buttons.warning.text` for contrast. |
| `buttons.warning.bgActive` | `{colors.warning.900}` | Pairs with `buttons.warning.text` for contrast. |
| `buttons.warning.bgDisabled` | `{colors.warning.200}` | buttons token. |
| `buttons.warning.text` | `{colors.white}` | buttons token. |
| `buttons.warning.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.warning.focusRing` | `{colors.warning.500} / 0.4` | buttons token. |
| `buttons.warning.focusVisible` | `{colors.warning.500} / 0.4` | buttons token. |
| `buttons.link.bg` | `transparent` | buttons token. |
| `buttons.link.bgHover` | `transparent` | buttons token. |
| `buttons.link.bgActive` | `transparent` | buttons token. |
| `buttons.link.bgDisabled` | `transparent` | buttons token. |
| `buttons.link.text` | `{colors.info.600}` | buttons token. |
| `buttons.link.textHover` | `{colors.info.700}` | buttons token. |
| `buttons.link.textActive` | `{colors.info.800}` | buttons token. |
| `buttons.link.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.link.focusRing` | `{colors.info.500} / 0.4` | buttons token. |
| `buttons.link.focusVisible` | `{colors.info.500} / 0.4` | buttons token. |
| `buttons.light.bg` | `{colors.neutral.100}` | Pairs with `buttons.light.text` for contrast. |
| `buttons.light.bgHover` | `{colors.neutral.200}` | Pairs with `buttons.light.text` for contrast. |
| `buttons.light.bgActive` | `{colors.neutral.300}` | Pairs with `buttons.light.text` for contrast. |
| `buttons.light.bgDisabled` | `{colors.neutral.50}` | buttons token. |
| `buttons.light.text` | `{colors.neutral.900}` | buttons token. |
| `buttons.light.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.light.focusRing` | `{colors.neutral.400} / 0.4` | buttons token. |
| `buttons.light.focusVisible` | `{colors.neutral.400} / 0.4` | buttons token. |
| `buttons.dark.bg` | `{colors.neutral.900}` | Pairs with `buttons.dark.text` for contrast. |
| `buttons.dark.bgHover` | `{colors.neutral.800}` | Pairs with `buttons.dark.text` for contrast. |
| `buttons.dark.bgActive` | `{colors.neutral.700}` | Pairs with `buttons.dark.text` for contrast. |
| `buttons.dark.bgDisabled` | `{colors.neutral.200}` | buttons token. |
| `buttons.dark.text` | `{colors.white}` | buttons token. |
| `buttons.dark.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.dark.focusRing` | `{colors.neutral.500} / 0.4` | buttons token. |
| `buttons.dark.focusVisible` | `{colors.neutral.500} / 0.4` | buttons token. |
| `buttons.cta.bg` | `{colors.brand.600}` | Pairs with `buttons.cta.text` for contrast. |
| `buttons.cta.bgHover` | `{colors.brand.700}` | Pairs with `buttons.cta.text` for contrast. |
| `buttons.cta.bgActive` | `{colors.brand.800}` | Pairs with `buttons.cta.text` for contrast. |
| `buttons.cta.bgDisabled` | `{colors.brand.200}` | buttons token. |
| `buttons.cta.text` | `{colors.white}` | buttons token. |
| `buttons.cta.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.cta.shadow` | `0 4px 14px 0 {colors.brand.500} / 0.39` | buttons token. |
| `buttons.cta.focusRing` | `{colors.brand.500} / 0.4` | buttons token. |
| `buttons.accent.bg` | `{colors.accent.700}` | Pairs with `buttons.accent.text` for contrast. |
| `buttons.accent.bgHover` | `{colors.accent.800}` | Pairs with `buttons.accent.text` for contrast. |
| `buttons.accent.bgActive` | `{colors.accent.900}` | Pairs with `buttons.accent.text` for contrast. |
| `buttons.accent.bgDisabled` | `{colors.accent.200}` | buttons token. |
| `buttons.accent.text` | `{colors.white}` | Pairs with `buttons.accent.bg` for contrast. |
| `buttons.accent.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.accent.focusRing` | `{colors.accent.500} / 0.4` | buttons token. |
| `buttons.accent.focusVisible` | `{colors.accent.500} / 0.4` | buttons token. |
| `buttons.inverse.bg` | `{colors.white} / 0.12` | buttons token. |
| `buttons.inverse.bgHover` | `{colors.white} / 0.2` | buttons token. |
| `buttons.inverse.bgActive` | `{colors.white} / 0.28` | buttons token. |
| `buttons.inverse.bgDisabled` | `{colors.white} / 0.08` | buttons token. |
| `buttons.inverse.text` | `{colors.white}` | Pairs with `surface.inverse` for contrast. |
| `buttons.inverse.textDisabled` | `{colors.neutral.400}` | buttons token. |
| `buttons.inverse.border` | `{colors.white} / 0.3` | buttons token. |
| `buttons.inverse.borderDisabled` | `{colors.white} / 0.16` | buttons token. |
| `buttons.inverse.focusRing` | `{colors.info.500} / 0.4` | buttons token. |
| `buttons.inverse.focusVisible` | `{colors.info.500} / 0.4` | buttons token. |

## forms

| Path | Value | Usage |
| ---- | ----- | ----- |
| `forms.default.bg` | `{colors.white}` | forms token. |
| `forms.default.border` | `{colors.neutral.300}` | forms token. |
| `forms.default.text` | `{colors.neutral.900}` | Pairs with `forms.default.bg` for contrast. |
| `forms.default.placeholder` | `{colors.neutral.500}` | Pairs with `forms.default.bg` for contrast. |
| `forms.hover.border` | `{colors.info.500}` | forms token. |
| `forms.focus.border` | `{colors.info.500}` | forms token. |
| `forms.focus.ring` | `{colors.info.500}` | forms token. |
| `forms.focusVisible.border` | `{colors.info.500}` | forms token. |
| `forms.focusVisible.ring` | `{colors.info.500}` | forms token. |
| `forms.valid.border` | `{colors.success.500}` | forms token. |
| `forms.valid.bg` | `{colors.success.50}` | Pairs with `forms.valid.text` for contrast. |
| `forms.valid.text` | `{colors.success.700}` | forms token. |
| `forms.invalid.border` | `{colors.error.500}` | forms token. |
| `forms.invalid.bg` | `{colors.error.50}` | Pairs with `forms.invalid.text` for contrast. |
| `forms.invalid.text` | `{colors.error.700}` | forms token. |
| `forms.disabled.bg` | `{colors.neutral.50}` | forms token. |
| `forms.disabled.border` | `{colors.neutral.200}` | forms token. |
| `forms.disabled.text` | `{colors.neutral.400}` | forms token. |

## link

| Path | Value | Usage |
| ---- | ----- | ----- |
| `link.default` | `{colors.brand.600}` | default inline link color |
| `link.hover` | `{colors.brand.700}` | link color on hover |
| `link.active` | `{colors.brand.800}` | link color while pressed |
| `link.visited` | `{colors.accent.700}` | link color after the destination has been visited |
| `link.onInverse` | `{colors.neutral.300}` | default inline link color on surface.inverse, independent of page mode |
| `link.onInverseHover` | `{colors.brand.300}` | link color on hover, on surface.inverse |

## surface

| Path | Value | Usage |
| ---- | ----- | ----- |
| `surface.page` | `{colors.neutral.50}` | primary app background |
| `surface.card` | `{colors.white}` | containers and tiles |
| `surface.input` | `{colors.white}` | form inputs, textareas |
| `surface.overlay` | `{colors.black} / 0.6` | modals, dropdowns, flyouts |
| `surface.hover` | `{colors.neutral.100}` | background for hovered clickable rows, items, and menu entries |
| `surface.selected` | `{colors.info.50}` | background for selected list items, rows, and menu entries |
| `surface.active` | `{colors.neutral.200}` | background for pressed/active clickable rows, items, and menu entries |
| `surface.divider` | `{colors.neutral.200}` | hairline color for <hr>, table borders, and section separators |
| `surface.inverse` | `{colors.neutral.900}` | fixed dark background for content islands not owned by the page's own light/dark mode — photo-backed cards, brand-dark card bodies, utility bars |

## text

| Path | Value | Usage |
| ---- | ----- | ----- |
| `text.onPage.default` | `{colors.neutral.900}` | base text on page background |
| `text.onPage.muted` | `{colors.neutral.600}` | muted text for de-emphasized content |
| `text.onPage.subtle` | `{colors.neutral.500}` | subtle text for secondary labels |
| `text.onPage.meta` | `{colors.neutral.500}` | meta text for smallest labels and timestamps |
| `text.onPage.brand` | `{colors.brand.600}` | text token. |
| `text.onSurface.default` | `{colors.neutral.900}` | base text on surface containers |
| `text.onSurface.muted` | `{colors.neutral.600}` | muted text on surfaces |
| `text.onSurface.subtle` | `{colors.neutral.500}` | subtle text on surfaces |
| `text.onSurface.meta` | `{colors.neutral.500}` | meta text on surfaces |
| `text.onSurface.brand` | `{colors.brand.600}` | text token. |
| `text.onInverse.default` | `{colors.neutral.50}` | base text on surface.inverse, independent of page mode |
| `text.onInverse.muted` | `{colors.neutral.300}` | muted text on surface.inverse |

## component

| Path | Value | Usage |
| ---- | ----- | ----- |
| `component.card.text` | `{colors.neutral.900}` | Pairs with `surface.card` for contrast. |
| `component.card.textMuted` | `{colors.neutral.600}` | Pairs with `surface.card` for contrast. |
| `component.card.padding.sm` | `1.5rem` | component token. |
| `component.card.padding.md` | `2rem` | component token. |
| `component.card.padding.lg` | `2.5rem` | component token. |
| `component.card.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.card.accent.brand` | `{colors.brand.600}` | component token. |
| `component.card.accent.info` | `{colors.info.600}` | component token. |
| `component.card.accent.success` | `{colors.success.600}` | component token. |
| `component.card.accent.warning` | `{colors.warning.600}` | component token. |
| `component.card.accent.danger` | `{colors.error.600}` | component token. |
| `component.card.accent.cta` | `{colors.brand.600}` | component token. |
| `component.card.accent.thickness` | `0.25rem` | component token. |
| `component.choiceCard.bg` | `{colors.white}` | Pairs with `component.choiceCard.text` for contrast. |
| `component.choiceCard.text` | `{colors.neutral.900}` | Pairs with `component.choiceCard.bg` for contrast. |
| `component.choiceCard.border` | `{colors.neutral.300}` | component token. |
| `component.choiceCard.hoverBorder` | `{colors.neutral.400}` | component token. |
| `component.choiceCard.selectedBg` | `{colors.info.50}` | component token. |
| `component.choiceCard.selectedBorder` | `{colors.brand.600}` | component token. |
| `component.choiceCard.disabledBg` | `{colors.neutral.50}` | component token. |
| `component.choiceCard.disabledText` | `{colors.neutral.400}` | component token. |
| `component.choiceCard.focusRing` | `{buttons.primary.focusRing}` | component token. |
| `component.input.text` | `{colors.neutral.900}` | Pairs with `forms.default.bg` for contrast. |
| `component.input.placeholder` | `{colors.neutral.500}` | Pairs with `forms.default.bg` for contrast. |
| `component.button.textDefault` | `{colors.neutral.900}` | component token. |
| `component.button.textOnPrimary` | `{colors.white}` | component token. |
| `component.badge.neutralBg` | `{colors.neutral.100}` | Pairs with `component.badge.neutralText` for contrast. |
| `component.badge.neutralBgHover` | `{colors.neutral.200}` | Pairs with `component.badge.neutralText` for contrast. |
| `component.badge.neutralText` | `{colors.neutral.700}` | Pairs with `component.badge.neutralBgHover` for contrast. |
| `component.badge.brandBg` | `{colors.brand.100}` | Pairs with `component.badge.brandText` for contrast. |
| `component.badge.brandBgHover` | `{colors.brand.200}` | Pairs with `component.badge.brandText` for contrast. |
| `component.badge.brandText` | `{colors.brand.800}` | Pairs with `component.badge.brandBgHover` for contrast. |
| `component.badge.infoBg` | `{colors.info.100}` | Pairs with `component.badge.infoText` for contrast. |
| `component.badge.infoBgHover` | `{colors.info.200}` | Pairs with `component.badge.infoText` for contrast. |
| `component.badge.infoText` | `{colors.info.700}` | Pairs with `component.badge.infoBgHover` for contrast. |
| `component.badge.successBg` | `{colors.success.100}` | Pairs with `component.badge.successText` for contrast. |
| `component.badge.successBgHover` | `{colors.success.200}` | Pairs with `component.badge.successText` for contrast. |
| `component.badge.successText` | `{colors.success.800}` | component token. |
| `component.badge.warningBg` | `{colors.warning.100}` | Pairs with `component.badge.warningText` for contrast. |
| `component.badge.warningBgHover` | `{colors.warning.200}` | Pairs with `component.badge.warningText` for contrast. |
| `component.badge.warningText` | `{colors.warning.800}` | component token. |
| `component.badge.dangerBg` | `{colors.error.100}` | Pairs with `component.badge.dangerText` for contrast. |
| `component.badge.dangerBgHover` | `{colors.error.200}` | Pairs with `component.badge.dangerText` for contrast. |
| `component.badge.dangerText` | `{colors.error.800}` | component token. |
| `component.badge.inverseBg` | `{colors.white} / 0.16` | component token. |
| `component.badge.inverseBgHover` | `{colors.white} / 0.24` | component token. |
| `component.badge.inverseText` | `{colors.white}` | Pairs with `surface.inverse` for contrast. |
| `component.badge.inverseBorder` | `{colors.white} / 0.3` | component token. |
| `component.badge.dotBorder` | `{colors.white}` | component token. |
| `component.badge.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.badge.accent.brand` | `{colors.brand.600}` | component token. |
| `component.badge.accent.info` | `{colors.info.600}` | component token. |
| `component.badge.accent.success` | `{colors.success.600}` | component token. |
| `component.badge.accent.warning` | `{colors.warning.600}` | component token. |
| `component.badge.accent.danger` | `{colors.error.600}` | component token. |
| `component.badge.accent.cta` | `{colors.brand.600}` | component token. |
| `component.badge.accent.thickness` | `0.25rem` | component token. |
| `component.iconBox.bg` | `{colors.white}` | Pairs with `component.iconBox.iconDefault` for contrast. |
| `component.iconBox.border` | `{colors.neutral.200}` | component token. |
| `component.iconBox.iconDefault` | `{colors.info.600}` | Pairs with `component.iconBox.bg` for contrast. |
| `component.iconBox.iconSuccess` | `{colors.success.600}` | component token. |
| `component.iconBox.iconWarning` | `{colors.warning.600}` | component token. |
| `component.iconBox.iconDanger` | `{colors.error.600}` | component token. |
| `component.testimonial.bg` | `{colors.white}` | Pairs with `component.testimonial.text` for contrast. |
| `component.testimonial.bgHover` | `{colors.neutral.50}` | Pairs with `component.testimonial.text` for contrast. |
| `component.testimonial.border` | `{colors.neutral.200}` | component token. |
| `component.testimonial.text` | `{colors.neutral.700}` | Pairs with `component.testimonial.bgHover` for contrast. |
| `component.testimonial.authorName` | `{colors.neutral.900}` | Pairs with `component.testimonial.bgHover` for contrast. |
| `component.testimonial.authorTitle` | `{colors.neutral.600}` | Pairs with `component.testimonial.bgHover` for contrast. |
| `component.testimonial.quoteMark` | `{colors.neutral.600}` | Pairs with `component.testimonial.bgHover` for contrast. |
| `component.testimonial.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.testimonial.accent.brand` | `{colors.brand.600}` | component token. |
| `component.testimonial.accent.info` | `{colors.info.600}` | component token. |
| `component.testimonial.accent.success` | `{colors.success.600}` | component token. |
| `component.testimonial.accent.warning` | `{colors.warning.600}` | component token. |
| `component.testimonial.accent.danger` | `{colors.error.600}` | component token. |
| `component.testimonial.accent.cta` | `{colors.brand.600}` | component token. |
| `component.testimonial.accent.thickness` | `0.25rem` | component token. |
| `component.pricingCard.bg` | `{colors.white}` | Pairs with `component.pricingCard.price` for contrast. |
| `component.pricingCard.bgHover` | `{colors.neutral.50}` | Pairs with `component.pricingCard.price` for contrast. |
| `component.pricingCard.border` | `{colors.neutral.200}` | component token. |
| `component.pricingCard.featuredBg` | `{colors.info.600}` | Pairs with `component.pricingCard.featuredText` for contrast. |
| `component.pricingCard.featuredText` | `{colors.white}` | Pairs with `component.pricingCard.featuredBg` for contrast. |
| `component.pricingCard.featuredBadgeBg` | `{colors.warning.500}` | Pairs with `component.pricingCard.featuredBadgeText` for contrast. |
| `component.pricingCard.featuredBadgeText` | `{colors.neutral.900}` | Pairs with `component.pricingCard.featuredBadgeBg` for contrast. |
| `component.pricingCard.price` | `{colors.neutral.900}` | Pairs with `component.pricingCard.bgHover` for contrast. |
| `component.pricingCard.priceDescription` | `{colors.neutral.600}` | Pairs with `component.pricingCard.bgHover` for contrast. |
| `component.pricingCard.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.pricingCard.accent.brand` | `{colors.brand.600}` | component token. |
| `component.pricingCard.accent.info` | `{colors.info.600}` | component token. |
| `component.pricingCard.accent.success` | `{colors.success.600}` | component token. |
| `component.pricingCard.accent.warning` | `{colors.warning.600}` | component token. |
| `component.pricingCard.accent.danger` | `{colors.error.600}` | component token. |
| `component.pricingCard.accent.cta` | `{colors.brand.600}` | component token. |
| `component.pricingCard.accent.thickness` | `0.25rem` | component token. |
| `component.rating.starFilled` | `{colors.warning.500}` | component token. |
| `component.rating.starEmpty` | `{colors.neutral.200}` | component token. |
| `component.rating.text` | `{colors.neutral.500}` | Pairs with `surface.card` for contrast. |
| `component.nav.bg` | `{colors.white}` | Pairs with `component.nav.text` for contrast. |
| `component.nav.text` | `{colors.neutral.900}` | Pairs with `component.nav.bg` for contrast. |
| `component.nav.link` | `{colors.neutral.700}` | component token. |
| `component.nav.linkHover` | `{colors.brand.600}` | component token. |
| `component.nav.linkActive` | `{colors.brand.700}` | component token. |
| `component.nav.border` | `{colors.neutral.200}` | component token. |
| `component.nav.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.nav.accent.brand` | `{colors.brand.600}` | component token. |
| `component.nav.accent.info` | `{colors.info.600}` | component token. |
| `component.nav.accent.success` | `{colors.success.600}` | component token. |
| `component.nav.accent.warning` | `{colors.warning.600}` | component token. |
| `component.nav.accent.danger` | `{colors.error.600}` | component token. |
| `component.nav.accent.cta` | `{colors.brand.600}` | component token. |
| `component.nav.accent.thickness` | `0.25rem` | component token. |
| `component.footer.bg` | `{colors.neutral.900}` | Pairs with `component.footer.text` for contrast. |
| `component.footer.text` | `{colors.neutral.50}` | Pairs with `component.footer.bg` for contrast. |
| `component.footer.heading` | `{colors.white}` | Pairs with `component.footer.bg` for contrast. |
| `component.footer.muted` | `{colors.neutral.400}` | Pairs with `component.footer.bg` for contrast. |
| `component.footer.link` | `{colors.neutral.300}` | Pairs with `component.footer.bg` for contrast. |
| `component.footer.linkHover` | `{colors.brand.400}` | Pairs with `component.footer.bg` for contrast. |
| `component.footer.border` | `{colors.neutral.700}` | component token. |
| `component.footer.divider` | `{colors.neutral.800}` | component token. |
| `component.footer.chipBg` | `{colors.neutral.800}` | component token. |
| `component.footer.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.footer.accent.brand` | `{colors.brand.600}` | component token. |
| `component.footer.accent.info` | `{colors.info.600}` | component token. |
| `component.footer.accent.success` | `{colors.success.600}` | component token. |
| `component.footer.accent.warning` | `{colors.warning.600}` | component token. |
| `component.footer.accent.danger` | `{colors.error.600}` | component token. |
| `component.footer.accent.cta` | `{colors.brand.600}` | component token. |
| `component.footer.accent.thickness` | `0.25rem` | component token. |
| `component.modal.bg` | `{colors.white}` | component token. |
| `component.modal.shadow` | `0 20px 48px -12px {colors.black} / 0.20` | component token. |
| `component.modal.border` | `{colors.neutral.200}` | component token. |
| `component.modal.overlay` | `{colors.black} / 0.6` | component token. |
| `component.modal.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.modal.accent.brand` | `{colors.brand.600}` | component token. |
| `component.modal.accent.info` | `{colors.info.600}` | component token. |
| `component.modal.accent.success` | `{colors.success.600}` | component token. |
| `component.modal.accent.warning` | `{colors.warning.600}` | component token. |
| `component.modal.accent.danger` | `{colors.error.600}` | component token. |
| `component.modal.accent.cta` | `{colors.brand.600}` | component token. |
| `component.modal.accent.thickness` | `0.25rem` | component token. |
| `component.toast.neutral.bg` | `{colors.neutral.50}` | Pairs with `component.toast.neutral.text` for contrast. |
| `component.toast.neutral.text` | `{colors.neutral.800}` | Pairs with `component.toast.neutral.bg` for contrast. |
| `component.toast.neutral.border` | `{colors.neutral.200}` | component token. |
| `component.toast.neutral.icon` | `{colors.neutral.600}` | component token. |
| `component.toast.success.bg` | `{colors.success.50}` | Pairs with `component.toast.success.text` for contrast. |
| `component.toast.success.text` | `{colors.success.800}` | Pairs with `component.toast.success.bg` for contrast. |
| `component.toast.success.border` | `{colors.success.200}` | component token. |
| `component.toast.success.icon` | `{colors.success.600}` | component token. |
| `component.toast.warning.bg` | `{colors.warning.50}` | Pairs with `component.toast.warning.text` for contrast. |
| `component.toast.warning.text` | `{colors.warning.800}` | Pairs with `component.toast.warning.bg` for contrast. |
| `component.toast.warning.border` | `{colors.warning.200}` | component token. |
| `component.toast.warning.icon` | `{colors.warning.600}` | component token. |
| `component.toast.danger.bg` | `{colors.error.50}` | Pairs with `component.toast.danger.text` for contrast. |
| `component.toast.danger.text` | `{colors.error.800}` | Pairs with `component.toast.danger.bg` for contrast. |
| `component.toast.danger.border` | `{colors.error.200}` | component token. |
| `component.toast.danger.icon` | `{colors.error.600}` | component token. |
| `component.toast.info.bg` | `{colors.info.50}` | Pairs with `component.toast.info.text` for contrast. |
| `component.toast.info.text` | `{colors.info.800}` | Pairs with `component.toast.info.bg` for contrast. |
| `component.toast.info.border` | `{colors.info.200}` | component token. |
| `component.toast.info.icon` | `{colors.info.600}` | component token. |
| `component.toast.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.toast.accent.brand` | `{colors.brand.600}` | component token. |
| `component.toast.accent.info` | `{colors.info.600}` | component token. |
| `component.toast.accent.success` | `{colors.success.600}` | component token. |
| `component.toast.accent.warning` | `{colors.warning.600}` | component token. |
| `component.toast.accent.danger` | `{colors.error.600}` | component token. |
| `component.toast.accent.cta` | `{colors.brand.600}` | component token. |
| `component.toast.accent.thickness` | `0.25rem` | component token. |
| `component.tooltip.bg` | `{colors.neutral.900}` | Pairs with `component.tooltip.text` for contrast. |
| `component.tooltip.text` | `{colors.white}` | Pairs with `component.tooltip.bg` for contrast. |
| `component.tooltip.border` | `{colors.neutral.700}` | component token. |
| `component.tooltip.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.tooltip.accent.brand` | `{colors.brand.600}` | component token. |
| `component.tooltip.accent.info` | `{colors.info.600}` | component token. |
| `component.tooltip.accent.success` | `{colors.success.600}` | component token. |
| `component.tooltip.accent.warning` | `{colors.warning.600}` | component token. |
| `component.tooltip.accent.danger` | `{colors.error.600}` | component token. |
| `component.tooltip.accent.cta` | `{colors.brand.600}` | component token. |
| `component.tooltip.accent.thickness` | `0.25rem` | component token. |
| `component.dropdown.bg` | `{colors.white}` | Pairs with `component.dropdown.item.text` for contrast. |
| `component.dropdown.border` | `{colors.neutral.200}` | component token. |
| `component.dropdown.item.default` | `transparent` | component token. |
| `component.dropdown.item.hover` | `{colors.neutral.100}` | component token. |
| `component.dropdown.item.active` | `{colors.info.50}` | component token. |
| `component.dropdown.item.text` | `{colors.neutral.900}` | Pairs with `component.dropdown.bg` for contrast. |
| `component.dropdown.item.disabledText` | `{colors.neutral.400}` | component token. |
| `component.dropdown.item.selectedBg` | `{colors.info.100}` | Pairs with `component.dropdown.item.selectedText` for contrast. |
| `component.dropdown.item.selectedText` | `{colors.info.700}` | Pairs with `component.dropdown.item.selectedBg` for contrast. |
| `component.dropdown.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.dropdown.accent.brand` | `{colors.brand.600}` | component token. |
| `component.dropdown.accent.info` | `{colors.info.600}` | component token. |
| `component.dropdown.accent.success` | `{colors.success.600}` | component token. |
| `component.dropdown.accent.warning` | `{colors.warning.600}` | component token. |
| `component.dropdown.accent.danger` | `{colors.error.600}` | component token. |
| `component.dropdown.accent.cta` | `{colors.brand.600}` | component token. |
| `component.dropdown.accent.thickness` | `0.25rem` | component token. |
| `component.dropdown.header` | `{colors.neutral.500}` | component token. |
| `component.dropdown.divider` | `{colors.neutral.200}` | component token. |
| `component.tabs.list.bg` | `{colors.white}` | Pairs with `component.tabs.item.text` for contrast. |
| `component.tabs.list.border` | `{colors.neutral.200}` | component token. |
| `component.tabs.item.text` | `{colors.neutral.600}` | Pairs with `component.tabs.list.bg` for contrast. |
| `component.tabs.item.hover.bg` | `{colors.neutral.100}` | component token. |
| `component.tabs.item.active.text` | `{colors.neutral.900}` | Pairs with `component.tabs.list.bg` for contrast. |
| `component.tabs.item.active.indicator` | `{colors.brand.600}` | component token. |
| `component.tabs.item.focus.ringColor` | `{buttons.primary.focusRing}` | component token. |
| `component.tabs.item.disabled.text` | `{colors.neutral.400}` | component token. |
| `component.tabs.pill.active.bg` | `{colors.brand.600}` | Pairs with `component.tabs.pill.active.text` for contrast. |
| `component.tabs.pill.active.text` | `{colors.white}` | Pairs with `component.tabs.pill.active.bg` for contrast. |
| `component.tabs.panel.bg` | `{colors.white}` | component token. |
| `component.accordion.bg` | `{colors.white}` | Pairs with `component.accordion.text` for contrast. |
| `component.accordion.text` | `{colors.neutral.900}` | Pairs with `component.accordion.bg` for contrast. |
| `component.accordion.border` | `{colors.neutral.200}` | component token. |
| `component.accordion.header.hoverBg` | `{colors.neutral.50}` | component token. |
| `component.accordion.icon.collapsed` | `{colors.neutral.500}` | component token. |
| `component.accordion.icon.expanded` | `{colors.neutral.900}` | component token. |
| `component.breadcrumb.item.text` | `{colors.neutral.600}` | component token. |
| `component.breadcrumb.item.hover.text` | `{colors.brand.600}` | component token. |
| `component.breadcrumb.item.active.text` | `{colors.neutral.900}` | component token. |
| `component.breadcrumb.separator` | `{colors.neutral.400}` | component token. |
| `component.listGroup.bg` | `{colors.white}` | Pairs with `component.listGroup.text` for contrast. |
| `component.listGroup.border` | `{colors.neutral.200}` | component token. |
| `component.listGroup.text` | `{colors.neutral.700}` | component token. |
| `component.listGroup.heading` | `{colors.neutral.900}` | component token. |
| `component.listGroup.muted` | `{colors.neutral.500}` | component token. |
| `component.listGroup.item.hover.bg` | `{colors.neutral.50}` | component token. |
| `component.listGroup.item.active.bg` | `{colors.brand.600}` | Pairs with `component.listGroup.item.active.text` for contrast. |
| `component.listGroup.item.active.text` | `{colors.white}` | Pairs with `component.listGroup.item.active.bg` for contrast. |
| `component.listGroup.item.selected.bg` | `{colors.info.50}` | component token. |
| `component.listGroup.item.disabled.text` | `{colors.neutral.400}` | component token. |
| `component.listGroup.accent.neutral` | `{colors.neutral.600}` | component token. |
| `component.listGroup.accent.brand` | `{colors.brand.600}` | component token. |
| `component.listGroup.accent.info` | `{colors.info.600}` | component token. |
| `component.listGroup.accent.success` | `{colors.success.600}` | component token. |
| `component.listGroup.accent.warning` | `{colors.warning.600}` | component token. |
| `component.listGroup.accent.danger` | `{colors.error.600}` | component token. |
| `component.listGroup.accent.cta` | `{colors.brand.600}` | component token. |
| `component.listGroup.accent.thickness` | `0.25rem` | component token. |
| `component.offcanvas.bg` | `{colors.white}` | Pairs with `component.offcanvas.text` for contrast. |
| `component.offcanvas.text` | `{colors.neutral.900}` | Pairs with `component.offcanvas.bg` for contrast. |
| `component.offcanvas.border` | `{colors.neutral.200}` | component token. |
| `component.offcanvas.overlay` | `{colors.black} / 0.6` | component token. |
| `component.carousel.indicator.default` | `{colors.white} / 0.5` | component token. |
| `component.carousel.indicator.active` | `{colors.white}` | component token. |
| `component.carousel.control.icon` | `{colors.white}` | component token. |
| `component.carousel.control.bg` | `{colors.black} / 0.3` | component token. |
| `component.carousel.caption.bg` | `{colors.black} / 0.4` | component token. |
| `component.carousel.caption.text` | `{colors.white}` | Pairs with `component.carousel.caption.bg` for contrast. |
| `component.table.header.bg` | `{colors.neutral.50}` | Pairs with `component.table.header.text` for contrast. |
| `component.table.header.text` | `{colors.neutral.700}` | Pairs with `component.table.header.bg` for contrast. |
| `component.table.text` | `{colors.neutral.900}` | component token. |
| `component.table.divider` | `{colors.neutral.200}` | component token. |
| `component.table.stripeBg` | `{colors.neutral.50}` | component token. |
| `component.table.hoverBg` | `{colors.neutral.100}` | component token. |
| `component.table.selectedBg` | `{colors.info.50}` | component token. |
| `component.table.row.neutral.bg` | `{colors.neutral.100}` | Pairs with `component.table.row.neutral.text` for contrast. |
| `component.table.row.neutral.text` | `{colors.neutral.700}` | Pairs with `component.table.row.neutral.bg` for contrast. |
| `component.table.row.info.bg` | `{colors.info.100}` | Pairs with `component.table.row.info.text` for contrast. |
| `component.table.row.info.text` | `{colors.info.700}` | Pairs with `component.table.row.info.bg` for contrast. |
| `component.table.row.success.bg` | `{colors.success.100}` | Pairs with `component.table.row.success.text` for contrast. |
| `component.table.row.success.text` | `{colors.success.800}` | Pairs with `component.table.row.success.bg` for contrast. |
| `component.table.row.warning.bg` | `{colors.warning.100}` | Pairs with `component.table.row.warning.text` for contrast. |
| `component.table.row.warning.text` | `{colors.warning.800}` | Pairs with `component.table.row.warning.bg` for contrast. |
| `component.table.row.danger.bg` | `{colors.error.100}` | Pairs with `component.table.row.danger.text` for contrast. |
| `component.table.row.danger.text` | `{colors.error.800}` | Pairs with `component.table.row.danger.bg` for contrast. |
| `component.alert.neutral.bg` | `{colors.neutral.100}` | Pairs with `component.alert.neutral.text` for contrast. |
| `component.alert.neutral.text` | `{colors.neutral.700}` | Pairs with `component.alert.neutral.bg` for contrast. |
| `component.alert.neutral.border` | `{colors.neutral.300}` | component token. |
| `component.alert.neutral.icon` | `{colors.neutral.600}` | component token. |
| `component.alert.brand.bg` | `{colors.brand.50}` | Pairs with `component.alert.brand.text` for contrast. |
| `component.alert.brand.text` | `{colors.brand.700}` | Pairs with `component.alert.brand.bg` for contrast. |
| `component.alert.brand.border` | `{colors.brand.200}` | component token. |
| `component.alert.brand.icon` | `{colors.brand.600}` | component token. |
| `component.alert.info.bg` | `{colors.info.50}` | Pairs with `component.alert.info.text` for contrast. |
| `component.alert.info.text` | `{colors.info.700}` | Pairs with `component.alert.info.bg` for contrast. |
| `component.alert.info.border` | `{colors.info.200}` | component token. |
| `component.alert.info.icon` | `{colors.info.600}` | component token. |
| `component.alert.success.bg` | `{colors.success.50}` | Pairs with `component.alert.success.text` for contrast. |
| `component.alert.success.text` | `{colors.success.800}` | Pairs with `component.alert.success.bg` for contrast. |
| `component.alert.success.border` | `{colors.success.200}` | component token. |
| `component.alert.success.icon` | `{colors.success.600}` | component token. |
| `component.alert.warning.bg` | `{colors.warning.50}` | Pairs with `component.alert.warning.text` for contrast. |
| `component.alert.warning.text` | `{colors.warning.800}` | Pairs with `component.alert.warning.bg` for contrast. |
| `component.alert.warning.border` | `{colors.warning.200}` | component token. |
| `component.alert.warning.icon` | `{colors.warning.600}` | component token. |
| `component.alert.danger.bg` | `{colors.error.50}` | Pairs with `component.alert.danger.text` for contrast. |
| `component.alert.danger.text` | `{colors.error.800}` | Pairs with `component.alert.danger.bg` for contrast. |
| `component.alert.danger.border` | `{colors.error.200}` | component token. |
| `component.alert.danger.icon` | `{colors.error.600}` | component token. |
| `component.pagination.item.text` | `{colors.neutral.700}` | component token. |
| `component.pagination.item.hover.bg` | `{colors.neutral.100}` | component token. |
| `component.pagination.item.active.bg` | `{colors.brand.600}` | Pairs with `component.pagination.item.active.text` for contrast. |
| `component.pagination.item.active.text` | `{colors.white}` | Pairs with `component.pagination.item.active.bg` for contrast. |
| `component.pagination.item.disabled.text` | `{colors.neutral.400}` | component token. |
| `component.stepper.step.pending.bg` | `{colors.neutral.200}` | Pairs with `component.stepper.step.pending.text` for contrast. |
| `component.stepper.step.pending.text` | `{colors.neutral.600}` | Pairs with `component.stepper.step.pending.bg` for contrast. |
| `component.stepper.step.active.bg` | `{colors.brand.600}` | Pairs with `component.stepper.step.active.text` for contrast. |
| `component.stepper.step.active.text` | `{colors.white}` | Pairs with `component.stepper.step.active.bg` for contrast. |
| `component.stepper.step.done.bg` | `{colors.success.700}` | Pairs with `component.stepper.step.done.text` for contrast. |
| `component.stepper.step.done.text` | `{colors.white}` | Pairs with `component.stepper.step.done.bg` for contrast. |
| `component.stepper.connector` | `{colors.neutral.200}` | component token. |
| `component.stepper.label.text` | `{colors.neutral.700}` | component token. |
| `component.popover.bg` | `{colors.white}` | Pairs with `component.popover.text` for contrast. |
| `component.popover.text` | `{colors.neutral.900}` | Pairs with `component.popover.bg` for contrast. |
| `component.popover.muted` | `{colors.neutral.600}` | component token. |
| `component.popover.border` | `{colors.neutral.200}` | component token. |
| `component.popover.shadow` | `0 12px 32px -8px {colors.black} / 0.18` | component token. |
| `component.popover.arrow` | `{colors.white}` | component token. |
| `component.progress.track.bg` | `{colors.neutral.200}` | component token. |
| `component.progress.indicator.neutral` | `{colors.neutral.600}` | component token. |
| `component.progress.indicator.brand` | `{colors.brand.600}` | component token. |
| `component.progress.indicator.info` | `{colors.info.600}` | component token. |
| `component.progress.indicator.success` | `{colors.success.600}` | component token. |
| `component.progress.indicator.warning` | `{colors.warning.600}` | component token. |
| `component.progress.indicator.danger` | `{colors.error.600}` | component token. |
| `component.progress.label.text` | `{colors.neutral.700}` | component token. |
| `component.loadingIndicator.default` | `{colors.neutral.600}` | component token. |
| `component.loadingIndicator.muted` | `{colors.neutral.400}` | component token. |
| `component.loadingIndicator.inverse` | `{colors.white}` | component token. |
| `component.loadingIndicator.brand` | `{colors.brand.600}` | component token. |
| `component.loadingIndicator.info` | `{colors.info.600}` | component token. |
| `component.loadingIndicator.success` | `{colors.success.600}` | component token. |
| `component.loadingIndicator.warning` | `{colors.warning.600}` | component token. |
| `component.loadingIndicator.danger` | `{colors.error.600}` | component token. |
| `component.switch.trackBg` | `{colors.neutral.300}` | component token. |
| `component.switch.trackCheckedBg` | `{colors.info.600}` | component token. |
| `component.switch.thumbBg` | `{colors.white}` | component token. |
| `component.switch.trackDisabledBg` | `{colors.neutral.100}` | component token. |
| `component.switch.thumbDisabledBg` | `{colors.neutral.200}` | component token. |
| `component.switch.focusRing` | `{buttons.primary.focusRing}` | component token. |
| `component.range.trackBg` | `{colors.neutral.200}` | component token. |
| `component.range.trackFilledBg` | `{colors.info.600}` | component token. |
| `component.range.thumbBg` | `{colors.white}` | component token. |
| `component.range.thumbBorder` | `{colors.info.600}` | component token. |
| `component.range.trackDisabledBg` | `{colors.neutral.100}` | component token. |
| `component.range.thumbDisabledBorder` | `{colors.neutral.300}` | component token. |
| `component.range.focusRing` | `{buttons.primary.focusRing}` | component token. |
| `component.fileInput.bg` | `{colors.white}` | Pairs with `component.fileInput.text` for contrast. |
| `component.fileInput.border` | `{colors.neutral.300}` | component token. |
| `component.fileInput.text` | `{colors.neutral.900}` | Pairs with `component.fileInput.bg` for contrast. |
| `component.fileInput.actionBg` | `{colors.neutral.100}` | Pairs with `component.fileInput.actionText` for contrast. |
| `component.fileInput.actionText` | `{colors.neutral.700}` | Pairs with `component.fileInput.actionBg` for contrast. |
| `component.fileInput.disabledBg` | `{colors.neutral.50}` | component token. |
| `component.fileInput.disabledBorder` | `{colors.neutral.200}` | component token. |
| `component.fileInput.disabledText` | `{colors.neutral.400}` | component token. |
| `component.fileInput.focusBorder` | `{colors.info.500}` | component token. |
| `component.fileInput.borderInvalid` | `{colors.error.500}` | component token. |
| `component.fileInput.bgInvalid` | `{colors.error.50}` | Pairs with `component.fileInput.text` for contrast. |
| `component.fileInput.borderSuccess` | `{colors.success.500}` | component token. |
| `component.fileInput.bgSuccess` | `{colors.success.50}` | Pairs with `component.fileInput.text` for contrast. |
| `component.inputGroup.addonBg` | `{colors.neutral.100}` | Pairs with `component.inputGroup.addonText` for contrast. |
| `component.inputGroup.addonText` | `{colors.neutral.600}` | Pairs with `component.inputGroup.addonBg` for contrast. |
| `component.inputGroup.addonBorder` | `{colors.neutral.300}` | component token. |
| `component.inputGroup.focusBorder` | `{colors.info.500}` | component token. |
| `component.inputGroup.disabledBg` | `{colors.neutral.50}` | component token. |
| `component.inputGroup.disabledText` | `{colors.neutral.400}` | component token. |
| `component.datepicker.panel.bg` | `{colors.white}` | component token. |
| `component.datepicker.panel.border` | `{colors.neutral.200}` | component token. |
| `component.datepicker.header.text` | `{colors.neutral.900}` | component token. |
| `component.datepicker.weekday.text` | `{colors.neutral.400}` | component token. |
| `component.day.default.text` | `{colors.neutral.900}` | component token. |
| `component.day.default.hover.bg` | `{colors.neutral.100}` | component token. |
| `component.day.selected.bg` | `{colors.brand.600}` | Pairs with `component.day.selected.text` for contrast. |
| `component.day.selected.text` | `{colors.white}` | Pairs with `component.day.selected.bg` for contrast. |
| `component.day.today.ringColor` | `{buttons.primary.focusRing}` | component token. |
| `component.day.outsideMonth.text` | `{colors.neutral.300}` | component token. |
| `component.day.disabled.text` | `{colors.neutral.400}` | component token. |
| `component.prose.blockquote.border` | `{colors.neutral.600}` | component token. |
| `component.prose.blockquote.text` | `{colors.neutral.600}` | component token. |
| `component.prose.code.bg` | `{colors.neutral.100}` | Pairs with `component.prose.code.text` for contrast. |
| `component.prose.code.text` | `{colors.neutral.900}` | Pairs with `component.prose.code.bg` for contrast. |
| `component.prose.codeBlock.bg` | `{colors.neutral.100}` | Pairs with `component.prose.codeBlock.text` for contrast. |
| `component.prose.codeBlock.text` | `{colors.neutral.900}` | Pairs with `component.prose.codeBlock.bg` for contrast. |
| `component.prose.codeBlock.border` | `{colors.neutral.200}` | component token. |
| `component.prose.mark.bg` | `{colors.warning.100}` | Pairs with `component.prose.mark.text` for contrast. |
| `component.prose.mark.text` | `{colors.warning.900}` | Pairs with `component.prose.mark.bg` for contrast. |
| `component.prose.hr` | `{colors.neutral.200}` | component token. |
| `component.externalAuthButton.bg` | `{colors.white}` | Pairs with `component.externalAuthButton.text` for contrast. |
| `component.externalAuthButton.text` | `{colors.neutral.900}` | Pairs with `component.externalAuthButton.bg` for contrast. |
| `component.externalAuthButton.border` | `{colors.neutral.300}` | component token. |
| `component.externalAuthButton.hoverBg` | `{colors.neutral.50}` | component token. |
| `component.externalAuthButton.activeBg` | `{colors.neutral.100}` | component token. |
| `component.externalAuthButton.disabledBg` | `{colors.neutral.50}` | component token. |
| `component.externalAuthButton.disabledText` | `{colors.neutral.400}` | component token. |
| `component.externalAuthButton.focusRing` | `{buttons.primary.focusRing}` | component token. |
| `component.checkbox.bg` | `{colors.white}` | component token. |
| `component.checkbox.border` | `{colors.neutral.300}` | component token. |
| `component.checkbox.checkedBg` | `{colors.info.600}` | Pairs with `component.checkbox.text` for contrast. |
| `component.checkbox.checkedBorder` | `{colors.info.600}` | component token. |
| `component.checkbox.text` | `{colors.white}` | Pairs with `component.checkbox.checkedBg` for contrast. |
| `component.checkbox.disabledBg` | `{colors.neutral.50}` | component token. |
| `component.checkbox.disabledBorder` | `{colors.neutral.200}` | component token. |
| `component.radio.bg` | `{colors.white}` | component token. |
| `component.radio.border` | `{colors.neutral.300}` | component token. |
| `component.radio.checkedBg` | `{colors.info.600}` | Pairs with `component.radio.text` for contrast. |
| `component.radio.checkedBorder` | `{colors.info.600}` | component token. |
| `component.radio.text` | `{colors.white}` | Pairs with `component.radio.checkedBg` for contrast. |
| `component.radio.disabledBg` | `{colors.neutral.50}` | component token. |
| `component.radio.disabledBorder` | `{colors.neutral.200}` | component token. |
| `component.select.bg` | `{colors.white}` | Pairs with `component.select.text` for contrast. |
| `component.select.border` | `{colors.neutral.300}` | component token. |
| `component.select.text` | `{colors.neutral.900}` | Pairs with `component.select.bg` for contrast. |
| `component.select.placeholderText` | `{colors.neutral.500}` | Pairs with `component.select.bg` for contrast. |
| `component.select.disabledBg` | `{colors.neutral.50}` | component token. |
| `component.select.disabledBorder` | `{colors.neutral.200}` | component token. |
| `component.select.focusBorder` | `{colors.info.500}` | component token. |
| `component.select.borderInvalid` | `{colors.error.500}` | component token. |
| `component.select.bgInvalid` | `{colors.error.50}` | Pairs with `component.select.text` for contrast. |
| `component.select.borderSuccess` | `{colors.success.500}` | component token. |
| `component.select.bgSuccess` | `{colors.success.50}` | Pairs with `component.select.text` for contrast. |
| `component.textarea.bg` | `{colors.white}` | Pairs with `component.textarea.text` for contrast. |
| `component.textarea.border` | `{colors.neutral.300}` | component token. |
| `component.textarea.text` | `{colors.neutral.900}` | Pairs with `component.textarea.bg` for contrast. |
| `component.textarea.placeholder` | `{colors.neutral.500}` | Pairs with `component.textarea.bg` for contrast. |
| `component.textarea.disabledBg` | `{colors.neutral.50}` | component token. |
| `component.textarea.disabledBorder` | `{colors.neutral.200}` | component token. |
| `component.textarea.focusBorder` | `{colors.info.500}` | component token. |
| `component.textarea.borderInvalid` | `{colors.error.500}` | component token. |
| `component.textarea.bgInvalid` | `{colors.error.50}` | Pairs with `component.textarea.text` for contrast. |
| `component.textarea.borderSuccess` | `{colors.success.500}` | component token. |
| `component.textarea.bgSuccess` | `{colors.success.50}` | Pairs with `component.textarea.text` for contrast. |
| `component.fieldset.border` | `{colors.neutral.200}` | component token. |
| `component.fieldset.legendText` | `{colors.neutral.900}` | component token. |
| `component.label.text` | `{colors.neutral.900}` | component token. |
| `component.label.disabledText` | `{colors.neutral.400}` | component token. |
| `component.label.requiredIndicatorText` | `{colors.error.600}` | component token. |

## modes

| Path | Value | Usage |
| ---- | ----- | ----- |
| `modes.default.surface.page` | `{colors.neutral.50}` | Pairs with `modes.default.text.onPage.default` for contrast. |
| `modes.default.surface.card` | `{colors.white}` | Pairs with `modes.default.text.onSurface.default` for contrast. |
| `modes.default.surface.input` | `{colors.white}` | Pairs with `modes.default.text.onSurface.default` for contrast. |
| `modes.default.surface.overlay` | `{colors.black} / 0.6` | modes token. |
| `modes.default.surface.subtle` | `{colors.neutral.100}` | slightly recessed background for zebra rows, section bands, and inset panels — one step below surface.page |
| `modes.default.surface.hero` | `linear-gradient(135deg, {colors.indigo.500} 0%, {colors.violet.600} 100%)` | full-bleed gradient background for hero and marketing sections only — not a general surface; pair with light text tokens explicitly |
| `modes.default.surface.hover` | `{colors.neutral.100}` | modes token. |
| `modes.default.surface.selected` | `{colors.info.50}` | modes token. |
| `modes.default.surface.active` | `{colors.neutral.200}` | modes token. |
| `modes.default.surface.divider` | `{colors.neutral.200}` | modes token. |
| `modes.default.text.onPage.default` | `{colors.neutral.900}` | Pairs with `modes.default.surface.page` for contrast. |
| `modes.default.text.onPage.muted` | `{colors.neutral.600}` | Pairs with `modes.default.surface.page` for contrast. |
| `modes.default.text.onPage.subtle` | `{colors.neutral.500}` | Pairs with `modes.default.surface.page` for contrast. |
| `modes.default.text.onPage.meta` | `{colors.neutral.500}` | Pairs with `modes.default.surface.page` for contrast. |
| `modes.default.text.onPage.brand` | `{colors.brand.600}` | Pairs with `modes.default.surface.page` for contrast. |
| `modes.default.text.onSurface.default` | `{colors.neutral.900}` | Pairs with `modes.default.surface.card` for contrast. |
| `modes.default.text.onSurface.muted` | `{colors.neutral.600}` | Pairs with `modes.default.surface.card` for contrast. |
| `modes.default.text.onSurface.subtle` | `{colors.neutral.500}` | Pairs with `modes.default.surface.card` for contrast. |
| `modes.default.text.onSurface.meta` | `{colors.neutral.500}` | Pairs with `modes.default.surface.card` for contrast. |
| `modes.default.text.onSurface.brand` | `{colors.brand.600}` | Pairs with `modes.default.surface.card` for contrast. |
| `modes.default.component.card.text` | `{colors.neutral.900}` | Pairs with `modes.default.surface.card` for contrast. |
| `modes.default.component.card.textMuted` | `{colors.neutral.600}` | Pairs with `modes.default.surface.card` for contrast. |
| `modes.default.component.card.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.card.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.card.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.card.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.card.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.card.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.card.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.choiceCard.bg` | `{colors.white}` | Pairs with `modes.default.component.choiceCard.text` for contrast. |
| `modes.default.component.choiceCard.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.choiceCard.bg` for contrast. |
| `modes.default.component.choiceCard.border` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.choiceCard.hoverBorder` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.choiceCard.selectedBg` | `{colors.info.50}` | modes token. |
| `modes.default.component.choiceCard.selectedBorder` | `{colors.brand.600}` | modes token. |
| `modes.default.component.choiceCard.disabledBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.choiceCard.disabledText` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.choiceCard.focusRing` | `{buttons.primary.focusRing}` | modes token. |
| `modes.default.component.input.text` | `{colors.neutral.900}` | Pairs with `modes.default.surface.input` for contrast. |
| `modes.default.component.input.placeholder` | `{colors.neutral.500}` | Pairs with `modes.default.surface.input` for contrast. |
| `modes.default.component.button.textDefault` | `{colors.neutral.900}` | modes token. |
| `modes.default.component.button.textOnPrimary` | `{colors.white}` | modes token. |
| `modes.default.component.badge.neutralBg` | `{colors.neutral.100}` | Pairs with `modes.default.component.badge.neutralText` for contrast. |
| `modes.default.component.badge.neutralBgHover` | `{colors.neutral.200}` | Pairs with `modes.default.component.badge.neutralText` for contrast. |
| `modes.default.component.badge.neutralText` | `{colors.neutral.700}` | Pairs with `modes.default.component.badge.neutralBgHover` for contrast. |
| `modes.default.component.badge.brandBg` | `{colors.brand.100}` | Pairs with `modes.default.component.badge.brandText` for contrast. |
| `modes.default.component.badge.brandBgHover` | `{colors.brand.200}` | Pairs with `modes.default.component.badge.brandText` for contrast. |
| `modes.default.component.badge.brandText` | `{colors.brand.800}` | Pairs with `modes.default.component.badge.brandBgHover` for contrast. |
| `modes.default.component.badge.infoBg` | `{colors.info.100}` | Pairs with `modes.default.component.badge.infoText` for contrast. |
| `modes.default.component.badge.infoBgHover` | `{colors.info.200}` | Pairs with `modes.default.component.badge.infoText` for contrast. |
| `modes.default.component.badge.infoText` | `{colors.info.700}` | Pairs with `modes.default.component.badge.infoBgHover` for contrast. |
| `modes.default.component.badge.successBg` | `{colors.success.100}` | Pairs with `modes.default.component.badge.successText` for contrast. |
| `modes.default.component.badge.successText` | `{colors.success.700}` | modes token. |
| `modes.default.component.badge.warningBg` | `{colors.warning.100}` | Pairs with `modes.default.component.badge.warningText` for contrast. |
| `modes.default.component.badge.warningText` | `{colors.warning.800}` | modes token. |
| `modes.default.component.badge.dangerBg` | `{colors.error.100}` | Pairs with `modes.default.component.badge.dangerText` for contrast. |
| `modes.default.component.badge.dangerText` | `{colors.error.700}` | modes token. |
| `modes.default.component.badge.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.badge.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.badge.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.badge.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.badge.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.badge.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.badge.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.iconBox.bg` | `{colors.white}` | Pairs with `modes.default.component.iconBox.iconDefault` for contrast. |
| `modes.default.component.iconBox.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.iconBox.iconDefault` | `{colors.info.600}` | Pairs with `modes.default.component.iconBox.bg` for contrast. |
| `modes.default.component.iconBox.iconSuccess` | `{colors.success.600}` | modes token. |
| `modes.default.component.iconBox.iconWarning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.iconBox.iconDanger` | `{colors.error.600}` | Pairs with `modes.default.component.iconBox.bg` for contrast. |
| `modes.default.component.testimonial.bg` | `{colors.white}` | Pairs with `modes.default.component.testimonial.text` for contrast. |
| `modes.default.component.testimonial.bgHover` | `{colors.neutral.50}` | Pairs with `modes.default.component.testimonial.text` for contrast. |
| `modes.default.component.testimonial.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.testimonial.text` | `{colors.neutral.700}` | Pairs with `modes.default.component.testimonial.bgHover` for contrast. |
| `modes.default.component.testimonial.authorName` | `{colors.neutral.900}` | Pairs with `modes.default.component.testimonial.bgHover` for contrast. |
| `modes.default.component.testimonial.authorTitle` | `{colors.neutral.600}` | Pairs with `modes.default.component.testimonial.bgHover` for contrast. |
| `modes.default.component.testimonial.quoteMark` | `{colors.neutral.600}` | Pairs with `modes.default.component.testimonial.bgHover` for contrast. |
| `modes.default.component.testimonial.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.testimonial.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.testimonial.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.testimonial.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.testimonial.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.testimonial.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.testimonial.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.pricingCard.bg` | `{colors.white}` | Pairs with `modes.default.component.pricingCard.price` for contrast. |
| `modes.default.component.pricingCard.bgHover` | `{colors.neutral.50}` | Pairs with `modes.default.component.pricingCard.price` for contrast. |
| `modes.default.component.pricingCard.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.pricingCard.featuredBg` | `{colors.info.600}` | Pairs with `modes.default.component.pricingCard.featuredText` for contrast. |
| `modes.default.component.pricingCard.featuredText` | `{colors.white}` | Pairs with `modes.default.component.pricingCard.featuredBg` for contrast. |
| `modes.default.component.pricingCard.featuredBadgeBg` | `{colors.warning.500}` | Pairs with `modes.default.component.pricingCard.featuredBadgeText` for contrast. |
| `modes.default.component.pricingCard.featuredBadgeText` | `{colors.neutral.900}` | Pairs with `modes.default.component.pricingCard.featuredBadgeBg` for contrast. |
| `modes.default.component.pricingCard.price` | `{colors.neutral.900}` | Pairs with `modes.default.component.pricingCard.bgHover` for contrast. |
| `modes.default.component.pricingCard.priceDescription` | `{colors.neutral.600}` | Pairs with `modes.default.component.pricingCard.bgHover` for contrast. |
| `modes.default.component.pricingCard.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.pricingCard.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.pricingCard.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.pricingCard.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.pricingCard.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.pricingCard.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.pricingCard.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.rating.starFilled` | `{colors.warning.500}` | modes token. |
| `modes.default.component.rating.starEmpty` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.rating.text` | `{colors.neutral.500}` | Pairs with `modes.default.surface.card` for contrast. |
| `modes.default.component.nav.bg` | `{colors.white}` | Pairs with `modes.default.component.nav.text` for contrast. |
| `modes.default.component.nav.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.nav.bg` for contrast. |
| `modes.default.component.nav.link` | `{colors.neutral.700}` | modes token. |
| `modes.default.component.nav.linkHover` | `{colors.brand.600}` | modes token. |
| `modes.default.component.nav.linkActive` | `{colors.brand.700}` | modes token. |
| `modes.default.component.nav.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.nav.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.nav.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.nav.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.nav.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.nav.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.nav.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.nav.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.footer.bg` | `{colors.neutral.900}` | Pairs with `modes.default.component.footer.text` for contrast. |
| `modes.default.component.footer.text` | `{colors.neutral.50}` | Pairs with `modes.default.component.footer.bg` for contrast. |
| `modes.default.component.footer.heading` | `{colors.white}` | Pairs with `modes.default.component.footer.bg` for contrast. |
| `modes.default.component.footer.muted` | `{colors.neutral.400}` | Pairs with `modes.default.component.footer.bg` for contrast. |
| `modes.default.component.footer.link` | `{colors.neutral.300}` | Pairs with `modes.default.component.footer.bg` for contrast. |
| `modes.default.component.footer.linkHover` | `{colors.brand.400}` | Pairs with `modes.default.component.footer.bg` for contrast. |
| `modes.default.component.footer.border` | `{colors.neutral.700}` | modes token. |
| `modes.default.component.footer.divider` | `{colors.neutral.800}` | modes token. |
| `modes.default.component.footer.chipBg` | `{colors.neutral.800}` | modes token. |
| `modes.default.component.footer.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.footer.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.footer.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.footer.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.footer.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.footer.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.footer.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.modal.bg` | `{colors.white}` | modes token. |
| `modes.default.component.modal.shadow` | `0 20px 48px -12px {colors.black} / 0.20` | modes token. |
| `modes.default.component.modal.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.modal.overlay` | `{colors.black} / 0.6` | modes token. |
| `modes.default.component.modal.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.modal.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.modal.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.modal.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.modal.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.modal.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.modal.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.toast.neutral.bg` | `{colors.neutral.50}` | Pairs with `modes.default.component.toast.neutral.text` for contrast. |
| `modes.default.component.toast.neutral.text` | `{colors.neutral.800}` | Pairs with `modes.default.component.toast.neutral.bg` for contrast. |
| `modes.default.component.toast.neutral.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.toast.neutral.icon` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.toast.success.bg` | `{colors.success.50}` | Pairs with `modes.default.component.toast.success.text` for contrast. |
| `modes.default.component.toast.success.text` | `{colors.success.800}` | Pairs with `modes.default.component.toast.success.bg` for contrast. |
| `modes.default.component.toast.success.border` | `{colors.success.200}` | modes token. |
| `modes.default.component.toast.success.icon` | `{colors.success.600}` | modes token. |
| `modes.default.component.toast.warning.bg` | `{colors.warning.50}` | Pairs with `modes.default.component.toast.warning.text` for contrast. |
| `modes.default.component.toast.warning.text` | `{colors.warning.800}` | Pairs with `modes.default.component.toast.warning.bg` for contrast. |
| `modes.default.component.toast.warning.border` | `{colors.warning.200}` | modes token. |
| `modes.default.component.toast.warning.icon` | `{colors.warning.600}` | modes token. |
| `modes.default.component.toast.danger.bg` | `{colors.error.50}` | Pairs with `modes.default.component.toast.danger.text` for contrast. |
| `modes.default.component.toast.danger.text` | `{colors.error.800}` | Pairs with `modes.default.component.toast.danger.bg` for contrast. |
| `modes.default.component.toast.danger.border` | `{colors.error.200}` | modes token. |
| `modes.default.component.toast.danger.icon` | `{colors.error.600}` | modes token. |
| `modes.default.component.toast.info.bg` | `{colors.info.50}` | Pairs with `modes.default.component.toast.info.text` for contrast. |
| `modes.default.component.toast.info.text` | `{colors.info.800}` | Pairs with `modes.default.component.toast.info.bg` for contrast. |
| `modes.default.component.toast.info.border` | `{colors.info.200}` | modes token. |
| `modes.default.component.toast.info.icon` | `{colors.info.600}` | modes token. |
| `modes.default.component.toast.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.toast.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.toast.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.toast.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.toast.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.toast.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.toast.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.tooltip.bg` | `{colors.neutral.900}` | Pairs with `modes.default.component.tooltip.text` for contrast. |
| `modes.default.component.tooltip.text` | `{colors.white}` | Pairs with `modes.default.component.tooltip.bg` for contrast. |
| `modes.default.component.tooltip.border` | `{colors.neutral.700}` | modes token. |
| `modes.default.component.tooltip.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.tooltip.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.tooltip.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.tooltip.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.tooltip.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.tooltip.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.tooltip.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.dropdown.bg` | `{colors.white}` | Pairs with `modes.default.component.dropdown.item.text` for contrast. |
| `modes.default.component.dropdown.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.dropdown.item.default` | `transparent` | modes token. |
| `modes.default.component.dropdown.item.hover` | `{colors.neutral.100}` | modes token. |
| `modes.default.component.dropdown.item.active` | `{colors.info.50}` | modes token. |
| `modes.default.component.dropdown.item.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.dropdown.bg` for contrast. |
| `modes.default.component.dropdown.item.disabledText` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.dropdown.item.selectedBg` | `{colors.info.100}` | Pairs with `modes.default.component.dropdown.item.selectedText` for contrast. |
| `modes.default.component.dropdown.item.selectedText` | `{colors.info.700}` | Pairs with `modes.default.component.dropdown.item.selectedBg` for contrast. |
| `modes.default.component.dropdown.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.dropdown.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.dropdown.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.dropdown.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.dropdown.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.dropdown.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.dropdown.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.dropdown.header` | `{colors.neutral.500}` | modes token. |
| `modes.default.component.dropdown.divider` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.tabs.list.bg` | `{colors.white}` | Pairs with `modes.default.component.tabs.item.text` for contrast. |
| `modes.default.component.tabs.list.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.tabs.item.text` | `{colors.neutral.600}` | Pairs with `modes.default.component.tabs.list.bg` for contrast. |
| `modes.default.component.tabs.item.hover.bg` | `{colors.neutral.100}` | modes token. |
| `modes.default.component.tabs.item.active.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.tabs.list.bg` for contrast. |
| `modes.default.component.tabs.item.active.indicator` | `{colors.brand.600}` | modes token. |
| `modes.default.component.tabs.item.focus.ringColor` | `{buttons.primary.focusRing}` | modes token. |
| `modes.default.component.tabs.item.disabled.text` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.tabs.pill.active.bg` | `{colors.brand.600}` | Pairs with `modes.default.component.tabs.pill.active.text` for contrast. |
| `modes.default.component.tabs.pill.active.text` | `{colors.white}` | Pairs with `modes.default.component.tabs.pill.active.bg` for contrast. |
| `modes.default.component.tabs.panel.bg` | `{colors.white}` | modes token. |
| `modes.default.component.accordion.bg` | `{colors.white}` | Pairs with `modes.default.component.accordion.text` for contrast. |
| `modes.default.component.accordion.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.accordion.bg` for contrast. |
| `modes.default.component.accordion.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.accordion.header.hoverBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.accordion.icon.collapsed` | `{colors.neutral.500}` | modes token. |
| `modes.default.component.accordion.icon.expanded` | `{colors.neutral.900}` | modes token. |
| `modes.default.component.breadcrumb.item.text` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.breadcrumb.item.hover.text` | `{colors.brand.600}` | modes token. |
| `modes.default.component.breadcrumb.item.active.text` | `{colors.neutral.900}` | modes token. |
| `modes.default.component.breadcrumb.separator` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.listGroup.bg` | `{colors.white}` | Pairs with `modes.default.component.listGroup.text` for contrast. |
| `modes.default.component.listGroup.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.listGroup.text` | `{colors.neutral.700}` | modes token. |
| `modes.default.component.listGroup.heading` | `{colors.neutral.900}` | modes token. |
| `modes.default.component.listGroup.muted` | `{colors.neutral.500}` | modes token. |
| `modes.default.component.listGroup.item.hover.bg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.listGroup.item.active.bg` | `{colors.brand.600}` | Pairs with `modes.default.component.listGroup.item.active.text` for contrast. |
| `modes.default.component.listGroup.item.active.text` | `{colors.white}` | Pairs with `modes.default.component.listGroup.item.active.bg` for contrast. |
| `modes.default.component.listGroup.item.selected.bg` | `{colors.info.50}` | modes token. |
| `modes.default.component.listGroup.item.disabled.text` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.listGroup.accent.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.listGroup.accent.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.listGroup.accent.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.listGroup.accent.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.listGroup.accent.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.listGroup.accent.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.listGroup.accent.cta` | `{colors.brand.600}` | modes token. |
| `modes.default.component.listGroup.accent.thickness` | `0.25rem` | modes token. |
| `modes.default.component.offcanvas.bg` | `{colors.white}` | Pairs with `modes.default.component.offcanvas.text` for contrast. |
| `modes.default.component.offcanvas.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.offcanvas.bg` for contrast. |
| `modes.default.component.offcanvas.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.offcanvas.overlay` | `{colors.black} / 0.6` | modes token. |
| `modes.default.component.carousel.indicator.default` | `{colors.white} / 0.5` | modes token. |
| `modes.default.component.carousel.indicator.active` | `{colors.white}` | modes token. |
| `modes.default.component.carousel.control.icon` | `{colors.white}` | modes token. |
| `modes.default.component.carousel.control.bg` | `{colors.black} / 0.3` | modes token. |
| `modes.default.component.carousel.caption.bg` | `{colors.black} / 0.4` | modes token. |
| `modes.default.component.carousel.caption.text` | `{colors.white}` | Pairs with `modes.default.component.carousel.caption.bg` for contrast. |
| `modes.default.component.table.header.bg` | `{colors.neutral.50}` | Pairs with `modes.default.component.table.header.text` for contrast. |
| `modes.default.component.table.header.text` | `{colors.neutral.700}` | Pairs with `modes.default.component.table.header.bg` for contrast. |
| `modes.default.component.table.text` | `{colors.neutral.900}` | modes token. |
| `modes.default.component.table.divider` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.table.stripeBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.table.hoverBg` | `{colors.neutral.100}` | modes token. |
| `modes.default.component.table.selectedBg` | `{colors.info.50}` | modes token. |
| `modes.default.component.table.row.neutral.bg` | `{colors.neutral.100}` | Pairs with `modes.default.component.table.row.neutral.text` for contrast. |
| `modes.default.component.table.row.neutral.text` | `{colors.neutral.700}` | Pairs with `modes.default.component.table.row.neutral.bg` for contrast. |
| `modes.default.component.table.row.info.bg` | `{colors.info.100}` | Pairs with `modes.default.component.table.row.info.text` for contrast. |
| `modes.default.component.table.row.info.text` | `{colors.info.700}` | Pairs with `modes.default.component.table.row.info.bg` for contrast. |
| `modes.default.component.table.row.success.bg` | `{colors.success.100}` | Pairs with `modes.default.component.table.row.success.text` for contrast. |
| `modes.default.component.table.row.success.text` | `{colors.success.800}` | Pairs with `modes.default.component.table.row.success.bg` for contrast. |
| `modes.default.component.table.row.warning.bg` | `{colors.warning.100}` | Pairs with `modes.default.component.table.row.warning.text` for contrast. |
| `modes.default.component.table.row.warning.text` | `{colors.warning.800}` | Pairs with `modes.default.component.table.row.warning.bg` for contrast. |
| `modes.default.component.table.row.danger.bg` | `{colors.error.100}` | Pairs with `modes.default.component.table.row.danger.text` for contrast. |
| `modes.default.component.table.row.danger.text` | `{colors.error.800}` | Pairs with `modes.default.component.table.row.danger.bg` for contrast. |
| `modes.default.component.alert.neutral.bg` | `{colors.neutral.100}` | Pairs with `modes.default.component.alert.neutral.text` for contrast. |
| `modes.default.component.alert.neutral.text` | `{colors.neutral.700}` | Pairs with `modes.default.component.alert.neutral.bg` for contrast. |
| `modes.default.component.alert.neutral.border` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.alert.neutral.icon` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.alert.brand.bg` | `{colors.brand.50}` | Pairs with `modes.default.component.alert.brand.text` for contrast. |
| `modes.default.component.alert.brand.text` | `{colors.brand.700}` | Pairs with `modes.default.component.alert.brand.bg` for contrast. |
| `modes.default.component.alert.brand.border` | `{colors.brand.200}` | modes token. |
| `modes.default.component.alert.brand.icon` | `{colors.brand.600}` | modes token. |
| `modes.default.component.alert.info.bg` | `{colors.info.50}` | Pairs with `modes.default.component.alert.info.text` for contrast. |
| `modes.default.component.alert.info.text` | `{colors.info.700}` | Pairs with `modes.default.component.alert.info.bg` for contrast. |
| `modes.default.component.alert.info.border` | `{colors.info.200}` | modes token. |
| `modes.default.component.alert.info.icon` | `{colors.info.600}` | modes token. |
| `modes.default.component.alert.success.bg` | `{colors.success.50}` | Pairs with `modes.default.component.alert.success.text` for contrast. |
| `modes.default.component.alert.success.text` | `{colors.success.800}` | Pairs with `modes.default.component.alert.success.bg` for contrast. |
| `modes.default.component.alert.success.border` | `{colors.success.200}` | modes token. |
| `modes.default.component.alert.success.icon` | `{colors.success.600}` | modes token. |
| `modes.default.component.alert.warning.bg` | `{colors.warning.50}` | Pairs with `modes.default.component.alert.warning.text` for contrast. |
| `modes.default.component.alert.warning.text` | `{colors.warning.800}` | Pairs with `modes.default.component.alert.warning.bg` for contrast. |
| `modes.default.component.alert.warning.border` | `{colors.warning.200}` | modes token. |
| `modes.default.component.alert.warning.icon` | `{colors.warning.600}` | modes token. |
| `modes.default.component.alert.danger.bg` | `{colors.error.50}` | Pairs with `modes.default.component.alert.danger.text` for contrast. |
| `modes.default.component.alert.danger.text` | `{colors.error.800}` | Pairs with `modes.default.component.alert.danger.bg` for contrast. |
| `modes.default.component.alert.danger.border` | `{colors.error.200}` | modes token. |
| `modes.default.component.alert.danger.icon` | `{colors.error.600}` | modes token. |
| `modes.default.component.pagination.item.text` | `{colors.neutral.700}` | modes token. |
| `modes.default.component.pagination.item.hover.bg` | `{colors.neutral.100}` | modes token. |
| `modes.default.component.pagination.item.active.bg` | `{colors.brand.600}` | Pairs with `modes.default.component.pagination.item.active.text` for contrast. |
| `modes.default.component.pagination.item.active.text` | `{colors.white}` | Pairs with `modes.default.component.pagination.item.active.bg` for contrast. |
| `modes.default.component.pagination.item.disabled.text` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.stepper.step.pending.bg` | `{colors.neutral.200}` | Pairs with `modes.default.component.stepper.step.pending.text` for contrast. |
| `modes.default.component.stepper.step.pending.text` | `{colors.neutral.600}` | Pairs with `modes.default.component.stepper.step.pending.bg` for contrast. |
| `modes.default.component.stepper.step.active.bg` | `{colors.brand.600}` | Pairs with `modes.default.component.stepper.step.active.text` for contrast. |
| `modes.default.component.stepper.step.active.text` | `{colors.white}` | Pairs with `modes.default.component.stepper.step.active.bg` for contrast. |
| `modes.default.component.stepper.step.done.bg` | `{colors.success.700}` | Pairs with `modes.default.component.stepper.step.done.text` for contrast. |
| `modes.default.component.stepper.step.done.text` | `{colors.white}` | Pairs with `modes.default.component.stepper.step.done.bg` for contrast. |
| `modes.default.component.stepper.connector` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.stepper.label.text` | `{colors.neutral.700}` | modes token. |
| `modes.default.component.popover.bg` | `{colors.white}` | Pairs with `modes.default.component.popover.text` for contrast. |
| `modes.default.component.popover.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.popover.bg` for contrast. |
| `modes.default.component.popover.muted` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.popover.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.popover.shadow` | `0 12px 32px -8px {colors.black} / 0.18` | modes token. |
| `modes.default.component.popover.arrow` | `{colors.white}` | modes token. |
| `modes.default.component.progress.track.bg` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.progress.indicator.neutral` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.progress.indicator.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.progress.indicator.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.progress.indicator.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.progress.indicator.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.progress.indicator.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.progress.label.text` | `{colors.neutral.700}` | modes token. |
| `modes.default.component.loadingIndicator.default` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.loadingIndicator.muted` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.loadingIndicator.inverse` | `{colors.white}` | modes token. |
| `modes.default.component.loadingIndicator.brand` | `{colors.brand.600}` | modes token. |
| `modes.default.component.loadingIndicator.info` | `{colors.info.600}` | modes token. |
| `modes.default.component.loadingIndicator.success` | `{colors.success.600}` | modes token. |
| `modes.default.component.loadingIndicator.warning` | `{colors.warning.600}` | modes token. |
| `modes.default.component.loadingIndicator.danger` | `{colors.error.600}` | modes token. |
| `modes.default.component.switch.trackBg` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.switch.trackCheckedBg` | `{colors.info.600}` | modes token. |
| `modes.default.component.switch.thumbBg` | `{colors.white}` | modes token. |
| `modes.default.component.switch.trackDisabledBg` | `{colors.neutral.100}` | modes token. |
| `modes.default.component.switch.thumbDisabledBg` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.switch.focusRing` | `{buttons.primary.focusRing}` | modes token. |
| `modes.default.component.range.trackBg` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.range.trackFilledBg` | `{colors.info.600}` | modes token. |
| `modes.default.component.range.thumbBg` | `{colors.white}` | modes token. |
| `modes.default.component.range.thumbBorder` | `{colors.info.600}` | modes token. |
| `modes.default.component.range.trackDisabledBg` | `{colors.neutral.100}` | modes token. |
| `modes.default.component.range.thumbDisabledBorder` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.range.focusRing` | `{buttons.primary.focusRing}` | modes token. |
| `modes.default.component.fileInput.bg` | `{colors.white}` | Pairs with `modes.default.component.fileInput.text` for contrast. |
| `modes.default.component.fileInput.border` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.fileInput.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.fileInput.bg` for contrast. |
| `modes.default.component.fileInput.actionBg` | `{colors.neutral.100}` | Pairs with `modes.default.component.fileInput.actionText` for contrast. |
| `modes.default.component.fileInput.actionText` | `{colors.neutral.700}` | Pairs with `modes.default.component.fileInput.actionBg` for contrast. |
| `modes.default.component.fileInput.disabledBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.fileInput.disabledBorder` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.fileInput.disabledText` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.fileInput.focusBorder` | `{colors.info.500}` | modes token. |
| `modes.default.component.inputGroup.addonBg` | `{colors.neutral.100}` | Pairs with `modes.default.component.inputGroup.addonText` for contrast. |
| `modes.default.component.inputGroup.addonText` | `{colors.neutral.600}` | Pairs with `modes.default.component.inputGroup.addonBg` for contrast. |
| `modes.default.component.inputGroup.addonBorder` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.inputGroup.focusBorder` | `{colors.info.500}` | modes token. |
| `modes.default.component.inputGroup.disabledBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.inputGroup.disabledText` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.datepicker.panel.bg` | `{colors.white}` | modes token. |
| `modes.default.component.datepicker.panel.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.datepicker.header.text` | `{colors.neutral.900}` | modes token. |
| `modes.default.component.datepicker.weekday.text` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.day.default.text` | `{colors.neutral.900}` | modes token. |
| `modes.default.component.day.default.hover.bg` | `{colors.neutral.100}` | modes token. |
| `modes.default.component.day.selected.bg` | `{colors.brand.600}` | Pairs with `modes.default.component.day.selected.text` for contrast. |
| `modes.default.component.day.selected.text` | `{colors.white}` | Pairs with `modes.default.component.day.selected.bg` for contrast. |
| `modes.default.component.day.today.ringColor` | `{buttons.primary.focusRing}` | modes token. |
| `modes.default.component.day.outsideMonth.text` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.day.disabled.text` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.prose.blockquote.border` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.prose.blockquote.text` | `{colors.neutral.600}` | modes token. |
| `modes.default.component.prose.code.bg` | `{colors.neutral.100}` | Pairs with `modes.default.component.prose.code.text` for contrast. |
| `modes.default.component.prose.code.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.prose.code.bg` for contrast. |
| `modes.default.component.prose.codeBlock.bg` | `{colors.neutral.100}` | Pairs with `modes.default.component.prose.codeBlock.text` for contrast. |
| `modes.default.component.prose.codeBlock.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.prose.codeBlock.bg` for contrast. |
| `modes.default.component.prose.codeBlock.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.prose.mark.bg` | `{colors.warning.100}` | Pairs with `modes.default.component.prose.mark.text` for contrast. |
| `modes.default.component.prose.mark.text` | `{colors.warning.900}` | Pairs with `modes.default.component.prose.mark.bg` for contrast. |
| `modes.default.component.prose.hr` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.externalAuthButton.bg` | `{colors.white}` | Pairs with `modes.default.component.externalAuthButton.text` for contrast. |
| `modes.default.component.externalAuthButton.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.externalAuthButton.bg` for contrast. |
| `modes.default.component.externalAuthButton.border` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.externalAuthButton.hoverBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.externalAuthButton.activeBg` | `{colors.neutral.100}` | modes token. |
| `modes.default.component.externalAuthButton.disabledBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.externalAuthButton.disabledText` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.externalAuthButton.focusRing` | `{buttons.primary.focusRing}` | modes token. |
| `modes.default.component.checkbox.bg` | `{colors.white}` | modes token. |
| `modes.default.component.checkbox.border` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.checkbox.checkedBg` | `{colors.info.600}` | Pairs with `modes.default.component.checkbox.text` for contrast. |
| `modes.default.component.checkbox.checkedBorder` | `{colors.info.600}` | modes token. |
| `modes.default.component.checkbox.text` | `{colors.white}` | Pairs with `modes.default.component.checkbox.checkedBg` for contrast. |
| `modes.default.component.checkbox.disabledBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.checkbox.disabledBorder` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.radio.bg` | `{colors.white}` | modes token. |
| `modes.default.component.radio.border` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.radio.checkedBg` | `{colors.info.600}` | Pairs with `modes.default.component.radio.text` for contrast. |
| `modes.default.component.radio.checkedBorder` | `{colors.info.600}` | modes token. |
| `modes.default.component.radio.text` | `{colors.white}` | Pairs with `modes.default.component.radio.checkedBg` for contrast. |
| `modes.default.component.radio.disabledBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.radio.disabledBorder` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.select.bg` | `{colors.white}` | Pairs with `modes.default.component.select.text` for contrast. |
| `modes.default.component.select.border` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.select.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.select.bg` for contrast. |
| `modes.default.component.select.placeholderText` | `{colors.neutral.500}` | Pairs with `modes.default.component.select.bg` for contrast. |
| `modes.default.component.select.disabledBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.select.disabledBorder` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.select.focusBorder` | `{colors.info.500}` | modes token. |
| `modes.default.component.textarea.bg` | `{colors.white}` | Pairs with `modes.default.component.textarea.text` for contrast. |
| `modes.default.component.textarea.border` | `{colors.neutral.300}` | modes token. |
| `modes.default.component.textarea.text` | `{colors.neutral.900}` | Pairs with `modes.default.component.textarea.bg` for contrast. |
| `modes.default.component.textarea.placeholder` | `{colors.neutral.500}` | Pairs with `modes.default.component.textarea.bg` for contrast. |
| `modes.default.component.textarea.disabledBg` | `{colors.neutral.50}` | modes token. |
| `modes.default.component.textarea.disabledBorder` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.textarea.focusBorder` | `{colors.info.500}` | modes token. |
| `modes.default.component.fieldset.border` | `{colors.neutral.200}` | modes token. |
| `modes.default.component.fieldset.legendText` | `{colors.neutral.900}` | modes token. |
| `modes.default.component.label.text` | `{colors.neutral.900}` | modes token. |
| `modes.default.component.label.disabledText` | `{colors.neutral.400}` | modes token. |
| `modes.default.component.label.requiredIndicatorText` | `{colors.error.600}` | modes token. |
| `modes.dark.surface.page` | `{colors.neutral.900}` | Pairs with `modes.dark.text.onPage.default` for contrast. |
| `modes.dark.surface.card` | `{colors.neutral.800}` | Pairs with `modes.dark.text.onSurface.default` for contrast. |
| `modes.dark.surface.input` | `{colors.neutral.700}` | Pairs with `modes.dark.text.onSurface.default` for contrast. |
| `modes.dark.surface.overlay` | `{colors.black} / 0.6` | modes token. |
| `modes.dark.surface.subtle` | `{colors.neutral.800}` | slightly recessed background for zebra rows, section bands, and inset panels — one step below surface.page |
| `modes.dark.surface.hero` | `linear-gradient(135deg, {colors.accent.700} 0%, {colors.accent.900} 100%)` | full-bleed gradient background for hero and marketing sections only — not a general surface; pair with light text tokens explicitly |
| `modes.dark.surface.hover` | `{colors.neutral.700}` | modes token. |
| `modes.dark.surface.selected` | `{colors.info.900}` | modes token. |
| `modes.dark.surface.active` | `{colors.neutral.600}` | modes token. |
| `modes.dark.surface.divider` | `{colors.neutral.700}` | modes token. |
| `modes.dark.text.onPage.default` | `{colors.neutral.50}` | Pairs with `modes.dark.surface.page` for contrast. |
| `modes.dark.text.onPage.muted` | `{colors.neutral.300}` | Pairs with `modes.dark.surface.page` for contrast. |
| `modes.dark.text.onPage.subtle` | `{colors.neutral.400}` | Pairs with `modes.dark.surface.page` for contrast. |
| `modes.dark.text.onPage.meta` | `{colors.neutral.400}` | Pairs with `modes.dark.surface.page` for contrast. |
| `modes.dark.text.onPage.brand` | `{colors.brand.400}` | Pairs with `modes.dark.surface.page` for contrast. |
| `modes.dark.text.onSurface.default` | `{colors.neutral.100}` | Pairs with `modes.dark.surface.card` for contrast. |
| `modes.dark.text.onSurface.muted` | `{colors.neutral.300}` | Pairs with `modes.dark.surface.card` for contrast. |
| `modes.dark.text.onSurface.subtle` | `{colors.neutral.400}` | Pairs with `modes.dark.surface.card` for contrast. |
| `modes.dark.text.onSurface.meta` | `{colors.neutral.400}` | Pairs with `modes.dark.surface.card` for contrast. |
| `modes.dark.text.onSurface.brand` | `{colors.brand.400}` | Pairs with `modes.dark.surface.card` for contrast. |
| `modes.dark.component.card.text` | `{colors.neutral.100}` | Pairs with `modes.dark.surface.card` for contrast. |
| `modes.dark.component.card.textMuted` | `{colors.neutral.300}` | Pairs with `modes.dark.surface.card` for contrast. |
| `modes.dark.component.card.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.card.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.card.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.card.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.card.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.card.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.card.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.choiceCard.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.choiceCard.text` for contrast. |
| `modes.dark.component.choiceCard.text` | `{colors.neutral.100}` | Pairs with `modes.dark.component.choiceCard.bg` for contrast. |
| `modes.dark.component.choiceCard.border` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.choiceCard.hoverBorder` | `{colors.neutral.500}` | modes token. |
| `modes.dark.component.choiceCard.selectedBg` | `{colors.info.900}` | modes token. |
| `modes.dark.component.choiceCard.selectedBorder` | `{colors.brand.600}` | modes token. |
| `modes.dark.component.choiceCard.disabledBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.choiceCard.disabledText` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.choiceCard.focusRing` | `{buttons.primary.focusRing}` | modes token. |
| `modes.dark.component.input.text` | `{colors.neutral.100}` | Pairs with `modes.dark.surface.input` for contrast. |
| `modes.dark.component.input.placeholder` | `{colors.neutral.300}` | Pairs with `modes.dark.surface.input` for contrast. |
| `modes.dark.component.button.textDefault` | `{colors.neutral.100}` | modes token. |
| `modes.dark.component.button.textOnPrimary` | `{colors.white}` | modes token. |
| `modes.dark.component.badge.neutralBg` | `{colors.neutral.700}` | Pairs with `modes.dark.component.badge.neutralText` for contrast. |
| `modes.dark.component.badge.neutralBgHover` | `{colors.neutral.600}` | Pairs with `modes.dark.component.badge.neutralText` for contrast. |
| `modes.dark.component.badge.neutralText` | `{colors.neutral.50}` | Pairs with `modes.dark.component.badge.neutralBgHover` for contrast. |
| `modes.dark.component.badge.brandBg` | `{colors.brand.900}` | Pairs with `modes.dark.component.badge.brandText` for contrast. |
| `modes.dark.component.badge.brandBgHover` | `{colors.brand.800}` | Pairs with `modes.dark.component.badge.brandText` for contrast. |
| `modes.dark.component.badge.brandText` | `{colors.brand.200}` | Pairs with `modes.dark.component.badge.brandBgHover` for contrast. |
| `modes.dark.component.badge.infoBg` | `{colors.info.800}` | Pairs with `modes.dark.component.badge.infoText` for contrast. |
| `modes.dark.component.badge.infoBgHover` | `{colors.info.700}` | Pairs with `modes.dark.component.badge.infoText` for contrast. |
| `modes.dark.component.badge.infoText` | `{colors.info.100}` | Pairs with `modes.dark.component.badge.infoBgHover` for contrast. |
| `modes.dark.component.badge.successBg` | `{colors.success.800}` | Pairs with `modes.dark.component.badge.successText` for contrast. |
| `modes.dark.component.badge.successBgHover` | `{colors.success.700}` | Pairs with `modes.dark.component.badge.successText` for contrast. |
| `modes.dark.component.badge.successText` | `{colors.success.100}` | modes token. |
| `modes.dark.component.badge.warningBg` | `{colors.warning.800}` | Pairs with `modes.dark.component.badge.warningText` for contrast. |
| `modes.dark.component.badge.warningBgHover` | `{colors.warning.800}` | Pairs with `modes.dark.component.badge.warningText` for contrast. |
| `modes.dark.component.badge.warningText` | `{colors.warning.100}` | modes token. |
| `modes.dark.component.badge.dangerBg` | `{colors.error.800}` | Pairs with `modes.dark.component.badge.dangerText` for contrast. |
| `modes.dark.component.badge.dangerBgHover` | `{colors.error.700}` | Pairs with `modes.dark.component.badge.dangerText` for contrast. |
| `modes.dark.component.badge.dangerText` | `{colors.error.100}` | modes token. |
| `modes.dark.component.badge.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.badge.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.badge.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.badge.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.badge.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.badge.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.badge.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.iconBox.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.iconBox.iconDefault` for contrast. |
| `modes.dark.component.iconBox.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.iconBox.iconDefault` | `{colors.info.400}` | Pairs with `modes.dark.component.iconBox.bg` for contrast. |
| `modes.dark.component.iconBox.iconSuccess` | `{colors.success.400}` | Pairs with `modes.dark.component.iconBox.bg` for contrast. |
| `modes.dark.component.iconBox.iconWarning` | `{colors.warning.400}` | Pairs with `modes.dark.component.iconBox.bg` for contrast. |
| `modes.dark.component.iconBox.iconDanger` | `{colors.error.400}` | Pairs with `modes.dark.component.iconBox.bg` for contrast. |
| `modes.dark.component.testimonial.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.testimonial.text` for contrast. |
| `modes.dark.component.testimonial.bgHover` | `{colors.neutral.700}` | Pairs with `modes.dark.component.testimonial.text` for contrast. |
| `modes.dark.component.testimonial.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.testimonial.text` | `{colors.neutral.200}` | Pairs with `modes.dark.component.testimonial.bgHover` for contrast. |
| `modes.dark.component.testimonial.authorName` | `{colors.neutral.100}` | Pairs with `modes.dark.component.testimonial.bgHover` for contrast. |
| `modes.dark.component.testimonial.authorTitle` | `{colors.neutral.300}` | Pairs with `modes.dark.component.testimonial.bgHover` for contrast. |
| `modes.dark.component.testimonial.quoteMark` | `{colors.neutral.300}` | Pairs with `modes.dark.component.testimonial.bgHover` for contrast. |
| `modes.dark.component.testimonial.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.testimonial.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.testimonial.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.testimonial.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.testimonial.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.testimonial.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.testimonial.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.pricingCard.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.pricingCard.price` for contrast. |
| `modes.dark.component.pricingCard.bgHover` | `{colors.neutral.700}` | Pairs with `modes.dark.component.pricingCard.price` for contrast. |
| `modes.dark.component.pricingCard.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.pricingCard.featuredBg` | `{colors.info.600}` | Pairs with `modes.dark.component.pricingCard.featuredText` for contrast. |
| `modes.dark.component.pricingCard.featuredText` | `{colors.white}` | Pairs with `modes.dark.component.pricingCard.featuredBg` for contrast. |
| `modes.dark.component.pricingCard.featuredBadgeBg` | `{colors.warning.500}` | Pairs with `modes.dark.component.pricingCard.featuredBadgeText` for contrast. |
| `modes.dark.component.pricingCard.featuredBadgeText` | `{colors.neutral.900}` | Pairs with `modes.dark.component.pricingCard.featuredBadgeBg` for contrast. |
| `modes.dark.component.pricingCard.price` | `{colors.neutral.100}` | Pairs with `modes.dark.component.pricingCard.bgHover` for contrast. |
| `modes.dark.component.pricingCard.priceDescription` | `{colors.neutral.300}` | Pairs with `modes.dark.component.pricingCard.bgHover` for contrast. |
| `modes.dark.component.pricingCard.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.pricingCard.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.pricingCard.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.pricingCard.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.pricingCard.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.pricingCard.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.pricingCard.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.rating.starFilled` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.rating.starEmpty` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.rating.text` | `{colors.neutral.400}` | Pairs with `modes.dark.surface.card` for contrast. |
| `modes.dark.component.nav.bg` | `{colors.neutral.900}` | Pairs with `modes.dark.component.nav.text` for contrast. |
| `modes.dark.component.nav.text` | `{colors.neutral.50}` | Pairs with `modes.dark.component.nav.bg` for contrast. |
| `modes.dark.component.nav.link` | `{colors.neutral.300}` | modes token. |
| `modes.dark.component.nav.linkHover` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.nav.linkActive` | `{colors.brand.300}` | modes token. |
| `modes.dark.component.nav.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.nav.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.nav.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.nav.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.nav.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.nav.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.nav.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.nav.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.footer.bg` | `{colors.black}` | Pairs with `modes.dark.component.footer.text` for contrast. |
| `modes.dark.component.footer.text` | `{colors.neutral.50}` | Pairs with `modes.dark.component.footer.bg` for contrast. |
| `modes.dark.component.footer.heading` | `{colors.white}` | Pairs with `modes.dark.component.footer.bg` for contrast. |
| `modes.dark.component.footer.muted` | `{colors.neutral.400}` | Pairs with `modes.dark.component.footer.bg` for contrast. |
| `modes.dark.component.footer.link` | `{colors.neutral.300}` | Pairs with `modes.dark.component.footer.bg` for contrast. |
| `modes.dark.component.footer.linkHover` | `{colors.brand.300}` | Pairs with `modes.dark.component.footer.bg` for contrast. |
| `modes.dark.component.footer.border` | `{colors.neutral.800}` | modes token. |
| `modes.dark.component.footer.divider` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.footer.chipBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.footer.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.footer.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.footer.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.footer.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.footer.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.footer.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.footer.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.modal.bg` | `{colors.neutral.800}` | modes token. |
| `modes.dark.component.modal.shadow` | `0 20px 48px -12px {colors.black} / 0.20` | modes token. |
| `modes.dark.component.modal.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.modal.overlay` | `{colors.black} / 0.6` | modes token. |
| `modes.dark.component.modal.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.modal.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.modal.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.modal.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.modal.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.modal.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.modal.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.toast.neutral.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.toast.neutral.text` for contrast. |
| `modes.dark.component.toast.neutral.text` | `{colors.neutral.100}` | Pairs with `modes.dark.component.toast.neutral.bg` for contrast. |
| `modes.dark.component.toast.neutral.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.toast.neutral.icon` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.toast.success.bg` | `{colors.success.900}` | Pairs with `modes.dark.component.toast.success.text` for contrast. |
| `modes.dark.component.toast.success.text` | `{colors.success.100}` | Pairs with `modes.dark.component.toast.success.bg` for contrast. |
| `modes.dark.component.toast.success.border` | `{colors.success.700}` | modes token. |
| `modes.dark.component.toast.success.icon` | `{colors.success.400}` | modes token. |
| `modes.dark.component.toast.warning.bg` | `{colors.warning.900}` | Pairs with `modes.dark.component.toast.warning.text` for contrast. |
| `modes.dark.component.toast.warning.text` | `{colors.warning.100}` | Pairs with `modes.dark.component.toast.warning.bg` for contrast. |
| `modes.dark.component.toast.warning.border` | `{colors.warning.700}` | modes token. |
| `modes.dark.component.toast.warning.icon` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.toast.danger.bg` | `{colors.error.900}` | Pairs with `modes.dark.component.toast.danger.text` for contrast. |
| `modes.dark.component.toast.danger.text` | `{colors.error.100}` | Pairs with `modes.dark.component.toast.danger.bg` for contrast. |
| `modes.dark.component.toast.danger.border` | `{colors.error.700}` | modes token. |
| `modes.dark.component.toast.danger.icon` | `{colors.error.400}` | modes token. |
| `modes.dark.component.toast.info.bg` | `{colors.info.900}` | Pairs with `modes.dark.component.toast.info.text` for contrast. |
| `modes.dark.component.toast.info.text` | `{colors.info.100}` | Pairs with `modes.dark.component.toast.info.bg` for contrast. |
| `modes.dark.component.toast.info.border` | `{colors.info.700}` | modes token. |
| `modes.dark.component.toast.info.icon` | `{colors.info.400}` | modes token. |
| `modes.dark.component.toast.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.toast.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.toast.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.toast.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.toast.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.toast.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.toast.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.tooltip.bg` | `{colors.neutral.50}` | Pairs with `modes.dark.component.tooltip.text` for contrast. |
| `modes.dark.component.tooltip.text` | `{colors.neutral.900}` | Pairs with `modes.dark.component.tooltip.bg` for contrast. |
| `modes.dark.component.tooltip.border` | `{colors.neutral.300}` | modes token. |
| `modes.dark.component.tooltip.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.tooltip.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.tooltip.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.tooltip.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.tooltip.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.tooltip.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.tooltip.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.dropdown.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.dropdown.item.text` for contrast. |
| `modes.dark.component.dropdown.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.dropdown.item.default` | `transparent` | modes token. |
| `modes.dark.component.dropdown.item.hover` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.dropdown.item.active` | `{colors.info.900}` | modes token. |
| `modes.dark.component.dropdown.item.text` | `{colors.neutral.100}` | Pairs with `modes.dark.component.dropdown.bg` for contrast. |
| `modes.dark.component.dropdown.item.disabledText` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.dropdown.item.selectedBg` | `{colors.info.900}` | Pairs with `modes.dark.component.dropdown.item.selectedText` for contrast. |
| `modes.dark.component.dropdown.item.selectedText` | `{colors.info.300}` | Pairs with `modes.dark.component.dropdown.item.selectedBg` for contrast. |
| `modes.dark.component.dropdown.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.dropdown.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.dropdown.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.dropdown.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.dropdown.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.dropdown.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.dropdown.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.dropdown.header` | `{colors.neutral.500}` | modes token. |
| `modes.dark.component.dropdown.divider` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.tabs.list.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.tabs.item.text` for contrast. |
| `modes.dark.component.tabs.list.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.tabs.item.text` | `{colors.neutral.300}` | Pairs with `modes.dark.component.tabs.list.bg` for contrast. |
| `modes.dark.component.tabs.item.hover.bg` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.tabs.item.active.text` | `{colors.neutral.100}` | Pairs with `modes.dark.component.tabs.list.bg` for contrast. |
| `modes.dark.component.tabs.item.active.indicator` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.tabs.item.focus.ringColor` | `{buttons.primary.focusRing}` | modes token. |
| `modes.dark.component.tabs.item.disabled.text` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.tabs.pill.active.bg` | `{colors.brand.600}` | Pairs with `modes.dark.component.tabs.pill.active.text` for contrast. |
| `modes.dark.component.tabs.pill.active.text` | `{colors.white}` | Pairs with `modes.dark.component.tabs.pill.active.bg` for contrast. |
| `modes.dark.component.tabs.panel.bg` | `{colors.neutral.800}` | modes token. |
| `modes.dark.component.accordion.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.accordion.text` for contrast. |
| `modes.dark.component.accordion.text` | `{colors.neutral.100}` | Pairs with `modes.dark.component.accordion.bg` for contrast. |
| `modes.dark.component.accordion.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.accordion.header.hoverBg` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.accordion.icon.collapsed` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.accordion.icon.expanded` | `{colors.neutral.100}` | modes token. |
| `modes.dark.component.breadcrumb.item.text` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.breadcrumb.item.hover.text` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.breadcrumb.item.active.text` | `{colors.neutral.100}` | modes token. |
| `modes.dark.component.breadcrumb.separator` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.listGroup.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.listGroup.text` for contrast. |
| `modes.dark.component.listGroup.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.listGroup.text` | `{colors.neutral.300}` | modes token. |
| `modes.dark.component.listGroup.heading` | `{colors.neutral.100}` | modes token. |
| `modes.dark.component.listGroup.muted` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.listGroup.item.hover.bg` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.listGroup.item.active.bg` | `{colors.brand.600}` | Pairs with `modes.dark.component.listGroup.item.active.text` for contrast. |
| `modes.dark.component.listGroup.item.active.text` | `{colors.white}` | Pairs with `modes.dark.component.listGroup.item.active.bg` for contrast. |
| `modes.dark.component.listGroup.item.selected.bg` | `{colors.info.900}` | modes token. |
| `modes.dark.component.listGroup.item.disabled.text` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.listGroup.accent.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.listGroup.accent.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.listGroup.accent.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.listGroup.accent.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.listGroup.accent.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.listGroup.accent.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.listGroup.accent.cta` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.listGroup.accent.thickness` | `0.25rem` | modes token. |
| `modes.dark.component.offcanvas.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.offcanvas.text` for contrast. |
| `modes.dark.component.offcanvas.text` | `{colors.neutral.100}` | Pairs with `modes.dark.component.offcanvas.bg` for contrast. |
| `modes.dark.component.offcanvas.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.offcanvas.overlay` | `{colors.black} / 0.6` | modes token. |
| `modes.dark.component.carousel.indicator.default` | `{colors.white} / 0.5` | modes token. |
| `modes.dark.component.carousel.indicator.active` | `{colors.white}` | modes token. |
| `modes.dark.component.carousel.control.icon` | `{colors.white}` | modes token. |
| `modes.dark.component.carousel.control.bg` | `{colors.black} / 0.3` | modes token. |
| `modes.dark.component.carousel.caption.bg` | `{colors.black} / 0.4` | modes token. |
| `modes.dark.component.carousel.caption.text` | `{colors.white}` | Pairs with `modes.dark.component.carousel.caption.bg` for contrast. |
| `modes.dark.component.table.header.bg` | `{colors.neutral.700}` | Pairs with `modes.dark.component.table.header.text` for contrast. |
| `modes.dark.component.table.header.text` | `{colors.neutral.100}` | Pairs with `modes.dark.component.table.header.bg` for contrast. |
| `modes.dark.component.table.text` | `{colors.neutral.100}` | modes token. |
| `modes.dark.component.table.divider` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.table.stripeBg` | `{colors.neutral.800}` | modes token. |
| `modes.dark.component.table.hoverBg` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.table.selectedBg` | `{colors.info.900}` | modes token. |
| `modes.dark.component.table.row.neutral.bg` | `{colors.neutral.700}` | Pairs with `modes.dark.component.table.row.neutral.text` for contrast. |
| `modes.dark.component.table.row.neutral.text` | `{colors.neutral.100}` | Pairs with `modes.dark.component.table.row.neutral.bg` for contrast. |
| `modes.dark.component.table.row.info.bg` | `{colors.info.900}` | Pairs with `modes.dark.component.table.row.info.text` for contrast. |
| `modes.dark.component.table.row.info.text` | `{colors.info.200}` | Pairs with `modes.dark.component.table.row.info.bg` for contrast. |
| `modes.dark.component.table.row.success.bg` | `{colors.success.900}` | Pairs with `modes.dark.component.table.row.success.text` for contrast. |
| `modes.dark.component.table.row.success.text` | `{colors.success.200}` | Pairs with `modes.dark.component.table.row.success.bg` for contrast. |
| `modes.dark.component.table.row.warning.bg` | `{colors.warning.900}` | Pairs with `modes.dark.component.table.row.warning.text` for contrast. |
| `modes.dark.component.table.row.warning.text` | `{colors.warning.200}` | Pairs with `modes.dark.component.table.row.warning.bg` for contrast. |
| `modes.dark.component.table.row.danger.bg` | `{colors.error.900}` | Pairs with `modes.dark.component.table.row.danger.text` for contrast. |
| `modes.dark.component.table.row.danger.text` | `{colors.error.200}` | Pairs with `modes.dark.component.table.row.danger.bg` for contrast. |
| `modes.dark.component.alert.neutral.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.alert.neutral.text` for contrast. |
| `modes.dark.component.alert.neutral.text` | `{colors.neutral.100}` | Pairs with `modes.dark.component.alert.neutral.bg` for contrast. |
| `modes.dark.component.alert.neutral.border` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.alert.neutral.icon` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.alert.brand.bg` | `{colors.brand.900}` | Pairs with `modes.dark.component.alert.brand.text` for contrast. |
| `modes.dark.component.alert.brand.text` | `{colors.brand.200}` | Pairs with `modes.dark.component.alert.brand.bg` for contrast. |
| `modes.dark.component.alert.brand.border` | `{colors.brand.700}` | modes token. |
| `modes.dark.component.alert.brand.icon` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.alert.info.bg` | `{colors.info.900}` | Pairs with `modes.dark.component.alert.info.text` for contrast. |
| `modes.dark.component.alert.info.text` | `{colors.info.200}` | Pairs with `modes.dark.component.alert.info.bg` for contrast. |
| `modes.dark.component.alert.info.border` | `{colors.info.700}` | modes token. |
| `modes.dark.component.alert.info.icon` | `{colors.info.400}` | modes token. |
| `modes.dark.component.alert.success.bg` | `{colors.success.900}` | Pairs with `modes.dark.component.alert.success.text` for contrast. |
| `modes.dark.component.alert.success.text` | `{colors.success.200}` | Pairs with `modes.dark.component.alert.success.bg` for contrast. |
| `modes.dark.component.alert.success.border` | `{colors.success.700}` | modes token. |
| `modes.dark.component.alert.success.icon` | `{colors.success.400}` | modes token. |
| `modes.dark.component.alert.warning.bg` | `{colors.warning.900}` | Pairs with `modes.dark.component.alert.warning.text` for contrast. |
| `modes.dark.component.alert.warning.text` | `{colors.warning.200}` | Pairs with `modes.dark.component.alert.warning.bg` for contrast. |
| `modes.dark.component.alert.warning.border` | `{colors.warning.700}` | modes token. |
| `modes.dark.component.alert.warning.icon` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.alert.danger.bg` | `{colors.error.900}` | Pairs with `modes.dark.component.alert.danger.text` for contrast. |
| `modes.dark.component.alert.danger.text` | `{colors.error.200}` | Pairs with `modes.dark.component.alert.danger.bg` for contrast. |
| `modes.dark.component.alert.danger.border` | `{colors.error.700}` | modes token. |
| `modes.dark.component.alert.danger.icon` | `{colors.error.400}` | modes token. |
| `modes.dark.component.pagination.item.text` | `{colors.neutral.300}` | modes token. |
| `modes.dark.component.pagination.item.hover.bg` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.pagination.item.active.bg` | `{colors.brand.600}` | Pairs with `modes.dark.component.pagination.item.active.text` for contrast. |
| `modes.dark.component.pagination.item.active.text` | `{colors.white}` | Pairs with `modes.dark.component.pagination.item.active.bg` for contrast. |
| `modes.dark.component.pagination.item.disabled.text` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.stepper.step.pending.bg` | `{colors.neutral.700}` | Pairs with `modes.dark.component.stepper.step.pending.text` for contrast. |
| `modes.dark.component.stepper.step.pending.text` | `{colors.neutral.300}` | Pairs with `modes.dark.component.stepper.step.pending.bg` for contrast. |
| `modes.dark.component.stepper.step.active.bg` | `{colors.brand.600}` | Pairs with `modes.dark.component.stepper.step.active.text` for contrast. |
| `modes.dark.component.stepper.step.active.text` | `{colors.white}` | Pairs with `modes.dark.component.stepper.step.active.bg` for contrast. |
| `modes.dark.component.stepper.step.done.bg` | `{colors.success.700}` | Pairs with `modes.dark.component.stepper.step.done.text` for contrast. |
| `modes.dark.component.stepper.step.done.text` | `{colors.white}` | Pairs with `modes.dark.component.stepper.step.done.bg` for contrast. |
| `modes.dark.component.stepper.connector` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.stepper.label.text` | `{colors.neutral.300}` | modes token. |
| `modes.dark.component.popover.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.popover.text` for contrast. |
| `modes.dark.component.popover.text` | `{colors.neutral.100}` | Pairs with `modes.dark.component.popover.bg` for contrast. |
| `modes.dark.component.popover.muted` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.popover.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.popover.shadow` | `0 12px 32px -8px {colors.black} / 0.4` | modes token. |
| `modes.dark.component.popover.arrow` | `{colors.neutral.800}` | modes token. |
| `modes.dark.component.progress.track.bg` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.progress.indicator.neutral` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.progress.indicator.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.progress.indicator.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.progress.indicator.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.progress.indicator.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.progress.indicator.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.progress.label.text` | `{colors.neutral.300}` | modes token. |
| `modes.dark.component.loadingIndicator.default` | `{colors.neutral.300}` | modes token. |
| `modes.dark.component.loadingIndicator.muted` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.loadingIndicator.inverse` | `{colors.white}` | modes token. |
| `modes.dark.component.loadingIndicator.brand` | `{colors.brand.400}` | modes token. |
| `modes.dark.component.loadingIndicator.info` | `{colors.info.400}` | modes token. |
| `modes.dark.component.loadingIndicator.success` | `{colors.success.400}` | modes token. |
| `modes.dark.component.loadingIndicator.warning` | `{colors.warning.400}` | modes token. |
| `modes.dark.component.loadingIndicator.danger` | `{colors.error.400}` | modes token. |
| `modes.dark.component.switch.trackBg` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.switch.trackCheckedBg` | `{colors.info.600}` | modes token. |
| `modes.dark.component.switch.thumbBg` | `{colors.white}` | modes token. |
| `modes.dark.component.switch.trackDisabledBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.switch.thumbDisabledBg` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.switch.focusRing` | `{buttons.primary.focusRing}` | modes token. |
| `modes.dark.component.range.trackBg` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.range.trackFilledBg` | `{colors.info.600}` | modes token. |
| `modes.dark.component.range.thumbBg` | `{colors.white}` | modes token. |
| `modes.dark.component.range.thumbBorder` | `{colors.info.600}` | modes token. |
| `modes.dark.component.range.trackDisabledBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.range.thumbDisabledBorder` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.range.focusRing` | `{buttons.primary.focusRing}` | modes token. |
| `modes.dark.component.fileInput.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.fileInput.text` for contrast. |
| `modes.dark.component.fileInput.border` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.fileInput.text` | `{colors.neutral.50}` | Pairs with `modes.dark.component.fileInput.bg` for contrast. |
| `modes.dark.component.fileInput.actionBg` | `{colors.neutral.700}` | Pairs with `modes.dark.component.fileInput.actionText` for contrast. |
| `modes.dark.component.fileInput.actionText` | `{colors.neutral.100}` | Pairs with `modes.dark.component.fileInput.actionBg` for contrast. |
| `modes.dark.component.fileInput.disabledBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.fileInput.disabledBorder` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.fileInput.disabledText` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.fileInput.focusBorder` | `{colors.info.400}` | modes token. |
| `modes.dark.component.inputGroup.addonBg` | `{colors.neutral.700}` | Pairs with `modes.dark.component.inputGroup.addonText` for contrast. |
| `modes.dark.component.inputGroup.addonText` | `{colors.neutral.300}` | Pairs with `modes.dark.component.inputGroup.addonBg` for contrast. |
| `modes.dark.component.inputGroup.addonBorder` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.inputGroup.focusBorder` | `{colors.info.400}` | modes token. |
| `modes.dark.component.inputGroup.disabledBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.inputGroup.disabledText` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.datepicker.panel.bg` | `{colors.neutral.800}` | modes token. |
| `modes.dark.component.datepicker.panel.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.datepicker.header.text` | `{colors.neutral.100}` | modes token. |
| `modes.dark.component.datepicker.weekday.text` | `{colors.neutral.500}` | modes token. |
| `modes.dark.component.day.default.text` | `{colors.neutral.100}` | modes token. |
| `modes.dark.component.day.default.hover.bg` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.day.selected.bg` | `{colors.brand.600}` | Pairs with `modes.dark.component.day.selected.text` for contrast. |
| `modes.dark.component.day.selected.text` | `{colors.white}` | Pairs with `modes.dark.component.day.selected.bg` for contrast. |
| `modes.dark.component.day.today.ringColor` | `{buttons.primary.focusRing}` | modes token. |
| `modes.dark.component.day.outsideMonth.text` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.day.disabled.text` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.prose.blockquote.border` | `{colors.neutral.400}` | modes token. |
| `modes.dark.component.prose.blockquote.text` | `{colors.neutral.300}` | modes token. |
| `modes.dark.component.prose.code.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.prose.code.text` for contrast. |
| `modes.dark.component.prose.code.text` | `{colors.neutral.50}` | Pairs with `modes.dark.component.prose.code.bg` for contrast. |
| `modes.dark.component.prose.codeBlock.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.prose.codeBlock.text` for contrast. |
| `modes.dark.component.prose.codeBlock.text` | `{colors.neutral.50}` | Pairs with `modes.dark.component.prose.codeBlock.bg` for contrast. |
| `modes.dark.component.prose.codeBlock.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.prose.mark.bg` | `{colors.warning.900}` | Pairs with `modes.dark.component.prose.mark.text` for contrast. |
| `modes.dark.component.prose.mark.text` | `{colors.warning.200}` | Pairs with `modes.dark.component.prose.mark.bg` for contrast. |
| `modes.dark.component.prose.hr` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.externalAuthButton.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.externalAuthButton.text` for contrast. |
| `modes.dark.component.externalAuthButton.text` | `{colors.neutral.50}` | Pairs with `modes.dark.component.externalAuthButton.bg` for contrast. |
| `modes.dark.component.externalAuthButton.border` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.externalAuthButton.hoverBg` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.externalAuthButton.activeBg` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.externalAuthButton.disabledBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.externalAuthButton.disabledText` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.externalAuthButton.focusRing` | `{buttons.primary.focusRing}` | modes token. |
| `modes.dark.component.checkbox.bg` | `{colors.neutral.800}` | modes token. |
| `modes.dark.component.checkbox.border` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.checkbox.checkedBg` | `{colors.info.600}` | Pairs with `modes.dark.component.checkbox.text` for contrast. |
| `modes.dark.component.checkbox.checkedBorder` | `{colors.info.600}` | modes token. |
| `modes.dark.component.checkbox.text` | `{colors.white}` | Pairs with `modes.dark.component.checkbox.checkedBg` for contrast. |
| `modes.dark.component.checkbox.disabledBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.checkbox.disabledBorder` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.radio.bg` | `{colors.neutral.800}` | modes token. |
| `modes.dark.component.radio.border` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.radio.checkedBg` | `{colors.info.600}` | Pairs with `modes.dark.component.radio.text` for contrast. |
| `modes.dark.component.radio.checkedBorder` | `{colors.info.600}` | modes token. |
| `modes.dark.component.radio.text` | `{colors.white}` | Pairs with `modes.dark.component.radio.checkedBg` for contrast. |
| `modes.dark.component.radio.disabledBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.radio.disabledBorder` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.select.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.select.text` for contrast. |
| `modes.dark.component.select.border` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.select.text` | `{colors.neutral.50}` | Pairs with `modes.dark.component.select.bg` for contrast. |
| `modes.dark.component.select.placeholderText` | `{colors.neutral.400}` | Pairs with `modes.dark.component.select.bg` for contrast. |
| `modes.dark.component.select.disabledBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.select.disabledBorder` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.select.focusBorder` | `{colors.info.400}` | modes token. |
| `modes.dark.component.textarea.bg` | `{colors.neutral.800}` | Pairs with `modes.dark.component.textarea.text` for contrast. |
| `modes.dark.component.textarea.border` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.textarea.text` | `{colors.neutral.50}` | Pairs with `modes.dark.component.textarea.bg` for contrast. |
| `modes.dark.component.textarea.placeholder` | `{colors.neutral.400}` | Pairs with `modes.dark.component.textarea.bg` for contrast. |
| `modes.dark.component.textarea.disabledBg` | `{colors.neutral.900}` | modes token. |
| `modes.dark.component.textarea.disabledBorder` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.textarea.focusBorder` | `{colors.info.400}` | modes token. |
| `modes.dark.component.fieldset.border` | `{colors.neutral.700}` | modes token. |
| `modes.dark.component.fieldset.legendText` | `{colors.neutral.50}` | modes token. |
| `modes.dark.component.label.text` | `{colors.neutral.50}` | modes token. |
| `modes.dark.component.label.disabledText` | `{colors.neutral.600}` | modes token. |
| `modes.dark.component.label.requiredIndicatorText` | `{colors.error.400}` | modes token. |
