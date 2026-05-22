/** Gyro disabled for scroll performance — returns zero drift */
export function useGyroDrift() {
  return { x: 0, y: 0 }
}
