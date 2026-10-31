# Local compatibility patch

Base: npm dsh-soul-md 0.8.5; original license retained. A host settings bridge owns Config and provides live settings to preset-scoped persona/tools. Workspace list writes update only that field, preserving concurrent active persona changes. memory.tools is honored. Real native settings updates, scoped tool isolation and persona persistence passed.

2026-10-31: repackaged unchanged as 0.8.5-rivers.1 for dsh 0.2.1-rc.5 (peers ^0.2.1-rc.5,
engines.dsh range). Upstream 0.10.4 was not adopted: this copy's host settings bridge and
preset-scoped persona/tools are a local restructuring that 0.10.4 does not contain.
