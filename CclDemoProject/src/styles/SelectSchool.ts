// styles/KGBVSchool.styles.ts
import { StyleSheet } from "react-native";
import { COLORS, RADII, SPACING } from "../styles/CustomStyle";

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  header: {
    backgroundColor: COLORS.brand,
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xxl + 8,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  brandTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  brandSub: {
    color: "#E8F6FD",
    fontSize: 12,
    marginTop: 2,
    lineHeight: 16,
  },
  card: {
    backgroundColor: COLORS.card,
    marginHorizontal: SPACING.xl,
    marginTop: -SPACING.xxl,
    borderRadius: RADII.lg,
    padding: SPACING.xl,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.md,
  },
  backChevron: {
    fontSize: 22,
    color: COLORS.text,
    marginRight: SPACING.sm,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
  },
  banner: {
    backgroundColor: COLORS.banner,
    borderRadius: RADII.md,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING.md,
    marginBottom: SPACING.lg,
  },
  bannerIcon: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.line,
  },
  bannerText: {
    flex: 1,
    color: COLORS.text,
    fontSize: 13,
  },
  bannerArrow: {
    marginLeft: SPACING.sm,
    fontSize: 16,
    color: COLORS.brand,
    fontWeight: "600",
  },
  label: {
    color: COLORS.muted,
    fontSize: 13,
    marginBottom: SPACING.xs,
  },
  selectBox: {
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: RADII.md,
    paddingHorizontal: SPACING.md,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  selectValue: {
    color: COLORS.text,
    fontSize: 16,
  },
  caret: {
    fontSize: 18,
    color: COLORS.muted,
    marginLeft: SPACING.md,
  },
  nextBtn: {
    marginTop: SPACING.xxl,
    backgroundColor: COLORS.brandDark,
    height: 50,
    borderRadius: RADII.md,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  nextText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
});

export default styles;
