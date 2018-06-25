export function isContributor(username: string) {
  return this.contributors.indexOf(username.toLocaleLowerCase()) > -1;
}
