import { env } from "node:process"

/**
 * Get the path to the project root when deploying to GitHub Pages.
 * Your action should set the `REPO_NAME` environment variable at the step you need
 * (most likely when building the project), for example like this:
 *
 * - name: Build project
 *   run: pnpm build
 *   env:
 *     REPO_NAME: ${{ github.event.repository.name }}
 *
 * @returns {string} The path to the project directory from the domain root if working in a GitHub CI environment. If not, returns `/`.
 */
export function getProjectRoot () {
  if (!env.CI) return `/`

  return `/${env.REPO_NAME}/`
}
