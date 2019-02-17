export-apis:
	node out/export-api.js > src/kubernetes-api.ts

export-builder:
	node out/export-builder.js > src/kubernetes-builder.ts