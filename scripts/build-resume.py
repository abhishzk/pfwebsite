from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "static" / "abhishek-kumar-resume.pdf"

PAGE_WIDTH, PAGE_HEIGHT = A4
MARGIN_X = 17 * mm
MARGIN_TOP = 15 * mm
MARGIN_BOTTOM = 14 * mm

INK = colors.HexColor("#15191F")
MUTED = colors.HexColor("#5D6672")
FAINT = colors.HexColor("#7B8490")
LINE = colors.HexColor("#D5DBE2")
ACCENT = colors.HexColor("#2456D8")
ACCENT_SOFT = colors.HexColor("#DFE7FB")
SURFACE_SOFT = colors.HexColor("#F3F5F7")


class ResumeDocTemplate(BaseDocTemplate):
    pass


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="ResumeName",
        fontName="Helvetica-Bold",
        fontSize=25,
        leading=28,
        textColor=INK,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeTitle",
        fontName="Helvetica",
        fontSize=11,
        leading=14,
        textColor=ACCENT,
        spaceAfter=7,
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        fontName="Helvetica",
        fontSize=8.5,
        leading=11,
        textColor=MUTED,
        spaceAfter=0,
    )
)
styles.add(
    ParagraphStyle(
        name="Summary",
        fontName="Helvetica",
        fontSize=9.5,
        leading=13.8,
        textColor=INK,
        spaceAfter=0,
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        fontName="Courier-Bold",
        fontSize=8.5,
        leading=11,
        textColor=ACCENT,
        spaceBefore=7,
        spaceAfter=7,
        tracking=0.8,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        fontName="Helvetica-Bold",
        fontSize=10.2,
        leading=13,
        textColor=INK,
        spaceAfter=0,
    )
)
styles.add(
    ParagraphStyle(
        name="Company",
        fontName="Helvetica",
        fontSize=9.2,
        leading=12,
        textColor=MUTED,
        spaceAfter=0,
    )
)
styles.add(
    ParagraphStyle(
        name="Date",
        fontName="Courier",
        fontSize=7.8,
        leading=10,
        textColor=FAINT,
        alignment=TA_RIGHT,
        spaceAfter=0,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeBullet",
        fontName="Helvetica",
        fontSize=8.65,
        leading=12.25,
        leftIndent=10,
        firstLineIndent=-8,
        bulletIndent=0,
        textColor=INK,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Small",
        fontName="Helvetica",
        fontSize=8.4,
        leading=12,
        textColor=INK,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="SmallMuted",
        fontName="Helvetica",
        fontSize=8,
        leading=11.5,
        textColor=MUTED,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Link",
        fontName="Helvetica-Bold",
        fontSize=8.2,
        leading=11,
        textColor=ACCENT,
        spaceAfter=0,
    )
)


def section(title: str):
    return [
        Paragraph(escape(title.upper()), styles["Section"]),
        HRFlowable(width="100%", thickness=0.6, color=LINE, spaceBefore=0, spaceAfter=7),
    ]


def role_header(role: str, company: str, location: str, period: str):
    left = Paragraph(
        f"<b>{escape(role)}</b><br/><font color='#5D6672' size='8.5'>{escape(company)} | {escape(location)}</font>",
        styles["Role"],
    )
    right = Paragraph(escape(period), styles["Date"])
    table = Table([[left, right]], colWidths=[132 * mm, 40 * mm])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    return table


def bullet(text: str):
    return Paragraph(escape(text), styles["ResumeBullet"], bulletText="•")


def experience(role: str, company: str, location: str, period: str, bullets: list[str]):
    story = [role_header(role, company, location, period)]
    story.extend(bullet(item) for item in bullets)
    story.append(Spacer(1, 4))
    return KeepTogether(story)


def metric(value: str, label: str):
    return Paragraph(
        f"<font name='Courier-Bold' size='14' color='#15191F'>{escape(value)}</font><br/>"
        f"<font name='Helvetica' size='7.2' color='#5D6672'>{escape(label)}</font>",
        styles["Small"],
    )


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN_X, 10 * mm, PAGE_WIDTH - MARGIN_X, 10 * mm)
    canvas.setFillColor(FAINT)
    canvas.setFont("Courier", 6.8)
    canvas.drawString(MARGIN_X, 6.5 * mm, "ABHISHEK KUMAR / PRODUCT MANAGER")
    canvas.drawRightString(PAGE_WIDTH - MARGIN_X, 6.5 * mm, f"PAGE {doc.page}")
    canvas.restoreState()


def build_resume():
    doc = ResumeDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=MARGIN_TOP,
        bottomMargin=MARGIN_BOTTOM,
        title="Abhishek Kumar - Product Manager Resume",
        author="Abhishek Kumar",
        subject="Product Manager resume for Ireland and EU roles",
    )
    frame = Frame(
        MARGIN_X,
        MARGIN_BOTTOM,
        PAGE_WIDTH - (2 * MARGIN_X),
        PAGE_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
        id="resume",
    )
    doc.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=page_footer))

    story = [
        Paragraph("Abhishek Kumar", styles["ResumeName"]),
        Paragraph("Product Manager | AI, B2B SaaS, data, energy and fintech", styles["ResumeTitle"]),
        Paragraph(
            "Dublin, Ireland &nbsp;&nbsp;|&nbsp;&nbsp; "
            "<link href='mailto:abhishzk.ie@gmail.com' color='#2456D8'>abhishzk.ie@gmail.com</link> &nbsp;&nbsp;|&nbsp;&nbsp; "
            "<link href='https://abhishzk.com' color='#2456D8'>abhishzk.com</link> &nbsp;&nbsp;|&nbsp;&nbsp; "
            "<link href='https://www.linkedin.com/in/abhishzk/' color='#2456D8'>linkedin.com/in/abhishzk</link>",
            styles["Contact"],
        ),
        Spacer(1, 9),
        HRFlowable(width="100%", thickness=1.1, color=INK, spaceAfter=9),
        Paragraph(
            "Product Manager with an engineering background and hands-on ownership from discovery through adoption. "
            "Built 0-to-1 data and AI products, improved enterprise SaaS engagement, and led delivery across internal "
            "and external teams. Strong at turning ambiguous customer and production evidence into clear product decisions, "
            "measurable success criteria, and trusted releases.",
            styles["Summary"],
        ),
        Spacer(1, 8),
    ]

    story.extend(section("Selected product impact"))
    impact = Table(
        [[
            metric("3,500+", "VisaJobs candidates"),
            metric("84%", "platform session growth"),
            metric("95%", "PDF bill accuracy"),
            metric("28+", "AI product integrations"),
        ]],
        colWidths=[43 * mm] * 4,
    )
    impact.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), SURFACE_SOFT),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 9),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 9),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ]
        )
    )
    story.extend([impact, Spacer(1, 5)])
    story.extend(section("Experience"))
    story.append(
        experience(
            "Founder and Product Manager",
            "VisaJobs Ireland",
            "Dublin, Ireland",
            "Jan 2026 - Present",
            [
                "Founded and lead a searchable sponsorship data product used by 3,500+ candidates across 142 nationalities, covering 204,612 permit records, 22,800+ employers, and 4,400+ live jobs.",
                "Turned fragmented government permit data into sponsor verification, company comparison, live job search, permit tools, and application tracking with clear evidence and source boundaries.",
                "Validated demand through 51,000+ launch-post views and 1,400+ click-throughs, then expanded the candidate product into a verified employer platform from inbound market feedback.",
            ],
        )
    )
    story.append(
        experience(
            "Product Owner",
            "Watt Footprint",
            "Dublin, Ireland",
            "Jul 2025 - Dec 2025",
            [
                "Owned product backlog and roadmap across web and mobile for a multi-tenant energy SaaS platform, aligning a nine-person internal and external group through two-week delivery cycles, clear acceptance criteria, and release quality gates.",
                "Instrumented and reviewed Amplitude product analytics, using customer behavior and production evidence to prioritize deeper enterprise use and drive 84% session growth from H1 to H2 2025.",
                "Delivered Bill Reader v2 and v3 using AWS Textract for extraction, OpenAI for structured validation, and focused human review, reaching 95% PDF accuracy, 80% image accuracy, and 80% less processing time.",
                "Led product readiness for the first UK and UAE enterprise deployments across engineering, operations, and commercial teams, maintaining 100% logo retention during the engagement.",
            ],
        )
    )

    story.append(PageBreak())
    story.extend(section("Experience continued"))
    story.append(
        experience(
            "Product Manager",
            "Speeir",
            "Athlone, Ireland",
            "Sep 2024 - Jun 2025",
            [
                "Owned product vision, discovery, prioritization, pricing, and delivery across two 0-to-1 B2B SaaS products in a lean five-person team.",
                "Built and launched an AI search platform integrating 28+ external services across LLM providers, vector search, payments, authentication, and web search.",
                "Delivered a multi-tenant fitness management platform across web and mobile, translating user interviews and business requirements into PRDs, prototypes, and production-ready backlogs.",
            ],
        )
    )
    story.append(
        experience(
            "Software Engineer, Payments Network",
            "Mastercard",
            "Dublin, Ireland",
            "Jun 2022 - Jan 2023",
            [
                "Built event-driven payment processing systems on live-grade financial infrastructure, supporting production-like testing for 300+ merchant onboardings across multiple geographies.",
                "Raised automated test coverage from 82% to 97% and implemented PCI and PII data controls, developing the technical judgment I now use in regulated product decisions.",
            ],
        )
    )

    story.extend(section("Product practice"))
    practice_rows = [
        ("Discovery and strategy", "Customer interviews, jobs-to-be-done, market framing, roadmaps"),
        ("Prioritization and delivery", "Outcome framing, PRDs, user stories, acceptance criteria, release gates"),
        ("Analytics and evaluation", "Amplitude, adoption metrics, AI evaluation, production failure analysis"),
        ("Collaboration", "Engineering, design, data, QA, operations, commercial and executive stakeholders"),
        ("Product domains", "AI products, B2B SaaS, data products, energy technology and fintech"),
    ]
    practice = Table(
        [
            [
                Paragraph(f"<b>{escape(label)}</b>", styles["Small"]),
                Paragraph(escape(detail), styles["SmallMuted"]),
            ]
            for label, detail in practice_rows
        ],
        colWidths=[48 * mm, 124 * mm],
    )
    practice.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEBELOW", (0, 0), (-1, -2), 0.5, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    story.extend([practice, Spacer(1, 3)])

    story.extend(section("Education and credentials"))
    credentials = Table(
        [
            [
                Paragraph("<b>MEng Engineering Management</b><br/><font color='#5D6672'>First Class Honours, 2024</font>", styles["Small"]),
                Paragraph("Technological University of the Shannon", styles["SmallMuted"]),
            ],
            [
                Paragraph("<b>Professional Scrum Product Owner I</b><br/><font color='#5D6672'>93.8% score, Mar 2026</font>", styles["Small"]),
                Paragraph("Scrum.org", styles["SmallMuted"]),
            ],
            [
                Paragraph("<b>BEng Software Engineering</b><br/><font color='#5D6672'>Honours degree, 2021</font>", styles["Small"]),
                Paragraph("Technological University of the Shannon", styles["SmallMuted"]),
            ],
        ],
        colWidths=[92 * mm, 80 * mm],
    )
    credentials.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (-1, -1), SURFACE_SOFT),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 9),
                ("RIGHTPADDING", (0, 0), (-1, -1), 9),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    story.append(credentials)

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build_resume()
