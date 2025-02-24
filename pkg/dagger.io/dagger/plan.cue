package dagger

// A special kind of program which `dagger` can execute.
#Plan: {
	// Access client machine
	client: {
		// Access client filesystem
		// Path may be absolute, or relative to client working directory
		filesystem: [path=string]: {
			// Read data from that path
			read?: _#clientFilesystemRead & {
				"path": path
			}

			// If set, Write to that path
			write?: _#clientFilesystemWrite & {
				"path": path

				// avoid race condition
				if read != _|_ {
					_after: read
				}
			}
		}

		// Access client network endpoints
		network: [address=_#address]: _#clientNetwork & {
			"address": address
		}

		// Access client environment variables
		env: _#clientEnv

		// Execute commands in the client
		commands: [id=string]: _#clientCommand

		// Platform of the client machine
		platform: _#clientPlatform
	}

	// Configure platform execution
	// FIXME: temporarily disabled
	// platform?: string

	// Execute actions in containers
	actions: {
		...
	}
}

_#clientFilesystemRead: {
	$dagger: task: _name: "ClientFilesystemRead"

	// Path may be absolute, or relative to client working directory
	path: string

	{
		// CUE type defines expected content:
		//     string: contents of a regular file
		//     #Secret: secure reference to the file contents
		contents: string | #Secret
	} | {
		// CUE type defines expected content:
		//     #FS: contents of a directory
		contents: #FS

		// Filename patterns to include
		// Example: ["*.go", "Dockerfile"]
		include?: [...string]

		// Filename patterns to exclude
		// Example: ["node_modules"]
		exclude?: [...string]
	}
}

_#clientFilesystemWrite: {
	$dagger: task: _name: "ClientFilesystemWrite"

	// Path may be absolute, or relative to client working directory
	path: string
	{
		// File contents to export (as a string or secret)
		contents: string | #Secret

		// File permissions (defaults to 0o644)
		permissions?: int
	} | {
		// Filesystem contents to export
		// Reference an #FS field produced by an action
		contents: #FS
	}
}

_#clientNetwork: {
	$dagger: task: _name: "ClientNetwork"

	// URL to the socket
	// Example: unix:///var/run/docker.sock
	address: _#address

	{
		// unix socket or npipe
		connect: #Socket
		// } | {
		//  // FIXME: not yet implemented
		//  listen: #Socket
	}
}

// A network socket address
_#address: string & =~"^(unix://|npipe://).+"

_#clientEnv: {
	$dagger: task: _name: "ClientEnv"

	// CUE type defines expected content
	[!~"\\$dagger"]: *string | #Secret
}

_#clientCommand: {
	$dagger: task: _name: "ClientCommand"

	// Name of the command to execute
	// Examples: "ls", "/bin/bash"
	name: string

	// Positional arguments to the command
	// Examples: ["/tmp"]
	args: [...string]

	// Command-line flags represented in a civilized form
	// Example: {"-l": true, "-c": "echo hello world"}
	flags: [string]: bool | string

	// Environment variables
	// Example: {"DEBUG": "1"}
	env: [string]: string | #Secret

	// Capture standard output (as a string or secret)
	stdout?: *string | #Secret

	// Capture standard error (as a string or secret)
	stderr?: *string | #Secret

	// Inject standard input (from a string or secret)
	stdin?: string | #Secret
}

_#clientPlatform: {
	$dagger: task: _name: "ClientPlatform"

	// Operating system of the client machine
	os: string
	// Hardware architecture of the client machine
	arch: string
}
